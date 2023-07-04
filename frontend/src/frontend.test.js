import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    // Verify that the components are rendered correctly
    expect(screen.getByText('BookThat')).toBeInTheDocument();
    expect(screen.getByText('Select a Movie')).toBeInTheDocument();
    expect(screen.getByText('Select a Time Slot')).toBeInTheDocument();
    expect(screen.getByText('Select The Seats')).toBeInTheDocument();
    expect(screen.getByText('Book now')).toBeInTheDocument();
  });

  test('selects a movie', () => {
    render(<App />);

    // Click on the movie radio button
    userEvent.click(screen.getByLabelText('Suraj par mangal bhari'));

    // Verify that the movie is selected
    expect(screen.getByLabelText('Suraj par mangal bhari')).toBeChecked();
  });

  test('selects a time slot', () => {
    render(<App />);

    // Click on the time slot radio button
    userEvent.click(screen.getByLabelText('10:00 AM'));

    // Verify that the time slot is selected
    expect(screen.getByLabelText('10:00 AM')).toBeChecked();
  });

  test('selects seats', () => {
    render(<App />);

    // Select seats
    fireEvent.change(screen.getByLabelText('Type A1'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Type A2'), { target: { value: '3' } });

    // Verify that the seats are selected
    expect(screen.getByLabelText('Type A1').value).toBe('2');
    expect(screen.getByLabelText('Type A2').value).toBe('3');
  });

  test('submits booking', () => {
    render(<App />);

    // Select movie, time slot, and seats
    userEvent.click(screen.getByLabelText('Suraj par mangal bhari'));
    userEvent.click(screen.getByLabelText('10:00 AM'));
    fireEvent.change(screen.getByLabelText('Type A1'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Type A2'), { target: { value: '3' } });

    // Click on the "Book now" button
    userEvent.click(screen.getByText('Book now'));

    // Verify that the booking is submitted and modal is displayed
    expect(screen.getByText('Oops!!')).toBeInTheDocument();
  });
});
