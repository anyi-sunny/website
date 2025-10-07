// Import images
import audibleLogo from '../images/audibleChevron.png';
import bowdoinLogo from '../images/bowdoinB.png';
import washULogo from '../images/washU.png';
import tedxLogo from '../images/logo_copy.png';
import aoccLogo from '../images/IMG_1391jpg.jpeg';
import polarBear from '../images/polarBear.png';
import animalHouse from '../images/animalHouse.png';
import bsg from '../images/BSG-logo-black.svg';

export interface ExperienceTile {
    title: string;
    organization: string;
    duration: string;
    description: string[];
    image?: string;
}

export const workExperiences: ExperienceTile[] = [
    {
        title: "Software Development Engineer Intern",
        organization: "Audible an Amazon Company",
        duration: "Summer 2025",
        description: [
            "Implemented usage of GenAI in application aiding the troubleshooting process within integration testing",
            "Created a previewer feature to aid marketers in the creation of audible and amazon promotions",
            "React, Coral/Spring Framework, Java Lambda, AWS"
        ],
        image: audibleLogo
    },
    {
        title: "Software Engineer Intern", 
        organization: "Washington University", 
        duration: "Summer 2024", 
        description: [
            "Developed a web application to streamline research data collection using React and Flask",
        ],
        image: washULogo
    }, 
    {
        title: "Computer Science Learning Assistant", 
        organization: "Bowdoin College", 
        duration: "August 2023 - June 2024", 
        description: [
            "Assisted students in understanding course material and completing assignments",
            "Led weekly office hours",
            "Provided support for introductory computer science courses",
            "Python",
        ],
        image: bowdoinLogo
    }
];

export const leadershipExperiences: ExperienceTile[] = [
    {
        title: "President",
        organization: "Bowdoin Student Athlete Advisory Committee",
        duration: "2025-2026",
        image: polarBear,
        description: [
            "Led bi-weekly meetings and organize events",
            "Advocate for student-athlete interests",
            "Represent bowdoin at NESCAC meetings",
            "Created initiatives fundraising for cancer awareness, engaging teams in difficult discussions, and community service opportunities", 
            "Previously served as DEI Committee Chair, focusing on diversity and inclusion initiatives within the athletic department",
        ]
    }, 
    {
        title: "Co-Organizer",
        organization: "TedxBowdoinCollege Club",
        duration: "2024-2026",
        image: tedxLogo,
        description: [
            "Organized annual TEDx event featuring student, faculty, and alumni speakers",
            "Managed event logistics, speaker selection, and marketing",
        ]
    },
    {
        title: "Advisor",
        organization: "Bowdoin Athletes of Color Coalition",
        duration: "2025-2026",
        image: aoccLogo,
        description: [
            "Previously served as Vice President and Treasurer",
            "Organized events like No Hate November to promote diversity and inclusion within the athletic community",
            "Advocated for student-athlete interests and fostered a supportive environment for athletes of color",
            "Organize fundraising events for mental health and women in sports intiatives", 
            "Create bonding opportunities for athletes of color",
        ]
    }, 
    {
        title: "Vice President", 
        organization: "Bowdoin Student Government",
        duration: "2022-2024", 
        image: bsg,
        description: [
            "Previously served as First Year Class President", 
            "Currently working as unofficial special advisor (2024-2026)", 
            "Advocate for student interests and organize events to enhance campus life", 
            "Pushed for ratification of week long Thanksgiving break",
        ]
    }
];

export const volunteerExperiences: ExperienceTile[] = [
    {
        title: "Student Volunteer",
        organization: "Animal House Cat and Rescue Adoption Center",
        duration: "Summer 2022",
        image: animalHouse,
        description: [
            "Clean cat cages, environments, and litter boxes",
            "Did laundry and dishes",
            "Fed and socialized with cats to prepare them for adoption"
        ]
    }, 
    {
        title: "Organizer",
        organization: "Bowdoin Athletics Cancer Awareness Initiative",
        duration: "August 2023 - Present",
        image: polarBear,
        description: [
            "Organize fundraising events for cancer awareness and research",
            "Worked with every Bowdoin athletic team to create a unified effort",
            "Raised over $2,000 in the trial year of the initiative"
        ]
    }, 
];
