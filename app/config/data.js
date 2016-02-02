const Data = {
    admissionsData: [
        {Name: 'Brown', SatMath: '670-780', SatReading: '660-770', SatWriting: '670-780', Act: '30-34', Applied: 30431, Admitted: 9, Enrolled: 59},
        {Name: 'CalTech', SatMath: '770-800', SatReading: '730-800', SatWriting: '730-800', Act: '31-34', Applied: 6525, Admitted: 9, Enrolled: 39},
        {Name: 'CarnegieMellon', SatMath: '700-800', SatReading: '640-740', SatWriting: '660-760', Act: '31-34', Applied: 19812, Admitted: 25, Enrolled: 30},
        {Name: 'MIT', SatMath: '740-800', SatReading: '680-770', SatWriting: '690-780', Act: '33-35', Applied: 18356, Admitted: 8, Enrolled: 72},
        {Name: 'Princeton', SatMath: '710-800', SatReading: '690-800', SatWriting: '700-800', Act: '31-35', Applied: 26641, Admitted: 7, Enrolled: 66},
        {Name: 'Rice', SatMath: '710-790', SatReading: '680-760', SatWriting: '670-770', Act: '31-34', Applied: 17728, Admitted: 15, Enrolled: 35},
        {Name: 'Stanford', SatMath: '700-790', SatReading: '680-780', SatWriting: '670-790', Act: '31-34', Applied: 42167, Admitted: 5, Enrolled: 78},
        {Name: 'UCBoulder', SatMath: '540-660', SatReading: '520-630', SatWriting: 'N/A', Act: '24-30', Applied: 28845, Admitted: 84, Enrolled: 24}
    ],
    costData: [
        {Name: 'Brown', Tuition: 46408, RoomBoard: 11994, Fees: 1026, Books: 1420, NeedBasedAid: 96, NonNeedBasedAid: 0, NeedBasedSelfHelpAid: 84, UndergradsThatBorrow: 35, AvgCumulativeDebt: 24300},
        {Name: 'CalTech', Tuition: 43710, RoomBoard: 13371, Fees: 1680, Books: 1323, NeedBasedAid: 100, NonNeedBasedAid: 0, NeedBasedSelfHelpAid: 45, UndergradsThatBorrow: 32, AvgCumulativeDebt: 12104},
        {Name: 'CarnegieMellon', Tuition: 49610, RoomBoard: 12830, Fees: 1055, Books: 2400, NeedBasedAid: 94, NonNeedBasedAid: 10, NeedBasedSelfHelpAid: 82, UndergradsThatBorrow: 45, AvgCumulativeDebt: 31905},
        {Name: 'MIT', Tuition: 44720, RoomBoard: 13224, Fees: 296, Books: 1000, NeedBasedAid: 96, NonNeedBasedAid: 2, NeedBasedSelfHelpAid: 100, UndergradsThatBorrow: 41, AvgCumulativeDebt: 17891},
        {Name: 'Princeton', Tuition: 41820, RoomBoard: 13620, Fees: 0, Books: 1050, NeedBasedAid: 100, NonNeedBasedAid: 0, NeedBasedSelfHelpAid: 100, UndergradsThatBorrow: 17, AvgCumulativeDebt: 6600},
        {Name: 'Rice', Tuition: 41560, RoomBoard: 13650, Fees: 693, Books: 800, NeedBasedAid: 100, NonNeedBasedAid: 5, NeedBasedSelfHelpAid: 57, UndergradsThatBorrow: 30, AvgCumulativeDebt: 22241},
        {Name: 'Stanford', Tuition: 44184, RoomBoard: 13631, Fees: 573, Books: 1425, NeedBasedAid: 98, NonNeedBasedAid: 3, NeedBasedSelfHelpAid: 69, UndergradsThatBorrow: 23, AvgCumulativeDebt: 19230},
        {Name: 'UCBoulder', Tuition: 9048, RoomBoard: 12810, Fees: 1741, Books: 1800, NeedBasedAid: 75, NonNeedBasedAid: 3, NeedBasedSelfHelpAid: 86, UndergradsThatBorrow: 46, AvgCumulativeDebt: 25126}
    ],
    studentsData: [
        {Name: 'Brown', FireSafety: 87, Enrollment: 6264, FemaleToMale: '51/49', International: '12%, 109', Race: '13, 44, 7, 11', StudentsToFaculty: '8/1', MajorsHighestEnrollment:'Econ, Biology, History', CompSciDept: 'https://cs.brown.edu/'},
        {Name: 'CalTech', FireSafety: 67, Enrollment: 983, FemaleToMale: '36/64', International: '9%, 32', Race: '44, 28, 2, 12', StudentsToFaculty: '3/1', MajorsHighestEnrollment:'Eng, Physics, Computer Sci, Math', CompSciDept: 'http://www.cms.caltech.edu/'},
        {Name: 'CarnegieMellon', FireSafety: 95, Enrollment: 6237, FemaleToMale: '44/56', International: '21%, 70', Race: '25, 33, 5, 7', StudentsToFaculty: '13/1', MajorsHighestEnrollment:'Eng, Physics, Computer Sci, Math', CompSciDept: 'https://www.scs.cmu.edu/'},
        {Name: 'MIT', FireSafety: 74, Enrollment: 4476, FemaleToMale: '46/54', International: '10%, 91', Race: '25, 37, 6, 16', StudentsToFaculty: '8/1',MajorsHighestEnrollment:'Computer Sci, Mech Eng, Math', CompSciDept: 'https://www.eecs.mit.edu/'},
        {Name: 'Princeton', FireSafety: 90 , Enrollment: 5258, FemaleToMale: '49/51', International: '11%, 92', Race: '21, 46, 8, 8', StudentsToFaculty: '8/1', MajorsHighestEnrollment:'Computer Eng, Public Admin, Econ', CompSciDept: 'https://www.cs.princeton.edu/'},
        {Name: 'Rice', FireSafety: 91, Enrollment: 3926, FemaleToMale: '49/51', International: '11%, 51', Race: '21, 39, 6, 15', StudentsToFaculty: '6/1', MajorsHighestEnrollment:'Biology, Psych, Econ', CompSciDept: 'https://www.cs.rice.edu/'},
        {Name: 'Stanford', FireSafety: 82, Enrollment: 7018, FemaleToMale: '47/53', International: '8%, 90', Race: '20, 39, 6, 15', StudentsToFaculty: '4/1', MajorsHighestEnrollment:'Biology, Psych, Economics', CompSciDept: 'http://cs.stanford.edu/'},
        {Name: 'UCBoulder', FireSafety: 90, Enrollment: 25859, FemaleToMale: '44/56', International: '5%, 107', Race: '5, 72, 2, 10', StudentsToFaculty: '18/1', MajorsHighestEnrollment:'Physiology, Phych, Speech Communic.', CompSciDept: 'http://www.colorado.edu/cs/'}
    ]
};

export default Data;