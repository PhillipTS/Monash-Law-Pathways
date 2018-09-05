export default {
    GradProfiles: [
        {
            id: 0,
            name: 'Kate Schmidt',
            description: 'Layer in the family & relationship law group - Landers & Rogers',
            file: require('./images/gradProfiles/Kate-Schmidt-Profile.png'),
            sector: 0
        },
        {
            id: 1,
            name: 'Shane Khong',
            description: 'Transfer Pricing Consultant',
            file: require('./images/gradProfiles/Shane-Khong-Profile.png'),
            sector: 0
        }
    ],
    Opportunities: [
        {
            id: 0,
            name: 'Just Leadership Program',
            description: 'The program affords selected students the opportunity to affiliate with, learn from and listen to high profile speakers who are closely associated with social justice and equity issues in the law. Students get to attend a series of seminars on social justice issues and create a project related to these issues.',
            file: require('./images/opportunities/Just-Leadership-Program.png'),
            links: [
                'www.monashlss.com/single-post/2018/03/12/JUST-LEADERSHIP-PROGRAM'
            ],
            dates: [
                {
                    name: 'Applications Open',
                    date: new Date("2019-02-26")
                },
                {
                    name: 'Applications Close',
                    date: new Date("2019-03-09")
                },
                {
                    name: 'First Seminar',
                    date: new Date("2019-03-27")
                }
            ]
        },
        {
            id: 1,
            name: 'Study Abroad Exchange Program',
            description: 'Going on exchange means you can stay enrolled at Monash, receive credit for overseas study towards your Monash degree and continue paying your Monash fees.There are 150 partner universities in more than 30 partner universities across Europe, North America, SouthAmerica, Asia and Africa. You may be eligible for a Monash travel grant.',
            file: require('./images/opportunities/Monash-Abroad-Student-Exchange.png'),
            links: [
                'www.monash.edu/study-abroad'
            ],
            dates: [
                {
                    name: 'Semester 1 Applications Close',
                    date: new Date("2019-04-15")
                },
                {
                    name: 'Semester 2 Applications Close',
                    date: new Date("2018-09-15")
                }
            ]
        },
        {
            id: 2,
            name: 'Access Monash Mentoring Program',
            description: 'Access Monash Mentoring is an exciting opportunity for Monash students who enjoy working with young people and want to make a difference. As a mentor, you will support secondary school students, helping them make informed decisions about their future. Access Monash is a volunteer program, however there is the opportunity to be supported by the Community Leaders Scholarship.',
            file: require('./images/opportunities/Access-Monash-Mentoring-Program.png'),
            links: [
                'www.monash.edu/access/mentoring/become_mentor'
            ],
            dates: [
                {
                    name: 'Applications Close',
                    date: new Date("2018-10-01")
                },
                {
                    name: 'Interviews Conducted',
                    date: new Date("2018-11-01")
                },
                {
                    name: 'Traning Day',
                    date: new Date("2019-02-01")
                }
            ]
        },
        {
            id: 3,
            name: 'Clinical Externships (LAW4803)',
            description: 'A clinical externship will give you the opportunity to engage in placement hosted by, or under the aegis of, an external organisation. Under professional supervision, you will undertake a range of activities involving work for end clients/ beneficiaries of that host organisation.',
            file: require('./images/opportunities/Clinical-Externships.png'),
            links: [
                'https://www.monash.edu/__data/assets/png_file/0019/1383040/LAW4803-T2-2018-Clinical-Handbook-04_05_2018.png',
                'www.monash.edu/pubs/2018handbooks/units/LAW4803'
            ],
            dates: null
        }
    ],
    Sectors: [
        {
            id: 0,
            name: 'Barristers',
            file: require('./images/sectors/Barristers.png'),
        },
        {
            id: 1,
            name: 'Top Tier Law Firms',
            file: require('./images/sectors/Top-Tier-Law-Firms.png'),
        },
        {
            id: 2,
            name: 'Mid Tier Law Firms',
            file: require('./images/sectors/Mid-Tier-Law-Firms.png'),
        },
        {
            id: 3,
            name: 'Boutique Law Firms',
            file: require('./images/sectors/Boutique-Law-Firms.png'),
        },
        {
            id: 4,
            name: 'Professional Services',
            file: require('./images/sectors/Professional-Services.png'),
        },
        {
            id: 5,
            name: 'Education And Academia',
            file: require('./images/sectors/Education.png'),
        },
        {
            id: 6,
            name: 'Community Legal Aid',
            file: require('./images/sectors/Community-Legal-Aid.png'),
        },
        {
            id: 7,
            name: 'Government',
            file: require('./images/sectors/Government.png'),
        },
        {
            id: 8,
            name: 'The Court System',
            file: require('./images/sectors/Court-System.png'),
        }
    ]
}