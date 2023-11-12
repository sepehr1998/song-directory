const { render } = require('@testing-library/react');
const LevelIndicator = require('./LevelIndicator').default;  // Use '.default' because it's an ES module

test('renders LevelIndicator component', () => {
    const progress = 5; // Replace with your desired progress value
    const { getByText } = render(<LevelIndicator progress={progress} />);
    const progressText = getByText(progress.toString());
    expect(progressText).toBeInTheDocument();
});
