import React from 'react';
import Dropdown from './Dropdown';
import styles from './Course.module.css';

const Course = () => {
    const menuItems = [
        { text: 'Mathematics', value: 'math' },
        { text: 'Science', value: 'science' },
        { text: 'English', value: 'english' },
        { text: 'History', value: 'history' },
        { text: 'Geography', value: 'geography' },
        { text: 'Art', value: 'art' },
        { text: 'Physical Education', value: 'pe' },
        { text: 'Computer Science', value: 'cs' },
    ];

    return (
        <div className={styles.courseContainer}>
            <h2 className={styles.courseTitle}>Select Course</h2>
            <Dropdown
                menuItems={menuItems}
                name="Select Course"
                width={styles.dropdownWidth}
            />
        </div>
    );
};

export default Course;
