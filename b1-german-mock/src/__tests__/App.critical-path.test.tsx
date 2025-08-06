import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

// Helper to start the first section
function startFirstSection() {
  // Main menu should be visible
  expect(screen.getByText(/B1 German Mock Test/i)).toBeInTheDocument();
  // Find the first section's button (should say 'Starten' or 'Fortsetzen')
  const startButton = screen.getAllByRole('button', { name: /Starten|Fortsetzen/i })[0];
  fireEvent.click(startButton);
}

describe('Critical Path: Answering Questions and Submitting a Section', () => {
  it('allows user to answer all questions in a section and submit', async () => {
    render(<App />);
    startFirstSection();

    // Loop through all questions in the section
    while (true) {
      // Find all answer option buttons (should match the a)-h) pattern)
      const optionButtons = screen.queryAllByRole('button').filter(btn =>
        /^[a-h]\)/i.test(btn.textContent || '')
      );
      if (optionButtons.length > 0) {
        fireEvent.click(optionButtons[0]);
      }
      // Try to find the Next button
      const nextButton = screen.queryByRole('button', { name: /Next/i });
      if (!nextButton || nextButton.disabled) break;
      fireEvent.click(nextButton);
    }

    // After last answer, should see submit confirmation or feedback
    await waitFor(() => {
      expect(
        screen.queryByText(/Abschicken bestätigen|Bewertung|Glückwunsch|richtig beantwortet/i)
      ).toBeInTheDocument();
    });
  });
});