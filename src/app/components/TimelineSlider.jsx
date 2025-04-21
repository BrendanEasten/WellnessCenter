import { useState } from "react";
import styles from "./TimelineSlider.module.css";

export default function TimelineSlider() {
    const [year, setYear] = useState(2004);
    const [isAnimating, setIsAnimating] = useState(false);

    const milestones = [
        {
            year: 2004,
            title: "Our Beginning",
            description:
                "The Wellness Center was founded with a vision to create a holistic approach to health and wellbeing in our community.",
        },
        {
            year: 2008,
            title: "Expanded Services",
            description:
                "Added our mindfulness program and opened our first dedicated meditation space to serve growing community needs.",
        },
        {
            year: 2017,
            title: "Digital Transformation",
            description:
                "Launched our online platform allowing clients to track their wellness journey and access resources from anywhere.",
        },
        {
            year: 2025,
            title: "Full Circle Wellness",
            description:
                "Celebrating over two decades of growth with our comprehensive wellness ecosystem integrating physical, mental, and emotional health.",
        },
    ];

    const findMilestone = (yr) => {
        return (
            milestones.find((m) => m.year === yr) ||
            milestones.reduce((prev, curr) =>
                Math.abs(curr.year - yr) < Math.abs(prev.year - yr)
                    ? curr
                    : prev
            )
        );
    };

    const currentMilestone = findMilestone(year);

    const handleSliderChange = (e) => {
        setYear(Number(e.target.value));
    };

    const animateTimeline = () => {
        setIsAnimating(true);
        let startYear = 2004;

        const animation = setInterval(() => {
            if (startYear < 2025) {
                startYear++;
                setYear(startYear);
            } else {
                clearInterval(animation);
                setIsAnimating(false);
            }
        }, 100);
    };

    const yearLabels = [2004, 2008, 2017, 2025];

    return (
        <section className={styles.timelineSection}>
            <h2 className={styles.sectionTitle}>
                Our Journey Through the Years
            </h2>

            <div className={styles.timelineContainer}>
                <div className={styles.timelineHeader}>
                    <div className={styles.yearDisplay}>{year}</div>
                    <button
                        onClick={animateTimeline}
                        disabled={isAnimating}
                        className={styles.playButton}
                    >
                        {isAnimating ? "Playing..." : "Play Timeline"}
                    </button>
                </div>

                <div className={styles.sliderContainer}>
                    <input
                        type="range"
                        min="2004"
                        max="2025"
                        value={year}
                        onChange={handleSliderChange}
                        className={styles.slider}
                    />
                    <div className={styles.yearMarkers}>
                        {yearLabels.map((yr) => (
                            <div key={yr} className={styles.yearLabel}>
                                {yr}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.progressTrack}>
                    {yearLabels.map((yr) => (
                        <div
                            key={yr}
                            className={`${styles.milestone} ${
                                year >= yr
                                    ? styles.milestoneActive
                                    : styles.milestoneInactive
                            }`}
                            style={{
                                left: `${((yr - 2004) / (2025 - 2004)) * 100}%`,
                            }}
                        />
                    ))}
                    <div
                        className={styles.progressFill}
                        style={{
                            width: `${((year - 2004) / (2025 - 2004)) * 100}%`,
                        }}
                    />
                </div>

                <div className={styles.milestoneContent}>
                    <h3 className={styles.milestoneTitle}>
                        {currentMilestone.title}
                    </h3>
                    <p className={styles.milestoneDescription}>
                        {currentMilestone.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
