import "./LevelIndicator.css"
function LevelIndicator (props) {
    let {
        size = 30,
        progress = 0,
        trackWidth = 1.5,
        trackColor = `#383635`,
        isSelected = false,
        indicatorWidth = 2,
        indicatorColor = `#07c`,
        indicatorCap = `round`,
        labelColor = `#333`,
        spinnerMode = false,
        spinnerSpeed = 1
    } = props

    if (progress > 15) {
        progress = 15;
    }

    if (!isSelected) {
        if (progress < 6) {
            indicatorColor = '#6fc13e';
        } else if (progress >= 6 && progress <= 10) {
            indicatorColor = '#ff8e00';
        } else {
            indicatorColor = '#dc001c';
        }
    } else {
        indicatorColor = 'white';
    }
    const center = size / 2,
        radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((15 - progress) / 15)

    labelColor = isSelected ? 'black' : 'white';
    let indicatorFill = isSelected ? 'white' : 'transparent';
    return (
            <div
                className="svg-pi-wrapper"
                style={{ width: size, height: size }}
            >
                <svg
                    className="svg-pi"
                    style={{ width: size, height: size }}
                >
                    <circle
                        className="svg-pi-track"
                        cx={center}
                        cy={center}
                        fill={indicatorFill}
                        r={radius}
                        stroke={trackColor}
                        strokeWidth={trackWidth}
                    />
                    <circle
                        className={`svg-pi-indicator ${
                            spinnerMode ? "svg-pi-indicator--spinner" : ""
                        }`}
                        style={{ animationDuration: spinnerSpeed * 1000 }}
                        cx={center}
                        cy={center}
                        fill="transparent"
                        r={radius}
                        stroke={indicatorColor}
                        strokeWidth={indicatorWidth}
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        strokeLinecap={indicatorCap}
                    />
                    <ellipse className="grey dashed" pathLength="30" cx={center} cy={center} r={radius}/>
                </svg>
                    <div
                        className="svg-pi-label"
                        style={{ color: labelColor }}
                    >
                        {!spinnerMode && (
                            <span className="svg-pi-label__progress" style={{ color: labelColor }}>
                                {`${progress > 15 ? 15 : progress}`}
                            </span>
                        )}
                    </div>
            </div>
    )
}
export default LevelIndicator;