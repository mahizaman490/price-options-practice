import { LineChart as LChart, Line ,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    var studentData = [
        {
          id: 1,
          name: "Student 1",
          math_marks: 85,
          physics_marks: 90,
          chemistry_marks: 78
        },
        {
          id: 2,
          name: "Student 2",
          math_marks: 78,
          physics_marks: 87,
          chemistry_marks: 92
        },
        {
          id: 3,
          name: "Student 3",
          math_marks: 92,
          physics_marks: 94,
          chemistry_marks: 89
        },
        {
          id: 4,
          name: "Student 4",
          math_marks: 88,
          physics_marks: 91,
          chemistry_marks: 85
        },
        {
          id: 5,
          name: "Student 5",
          math_marks: 76,
          physics_marks: 80,
          chemistry_marks: 78
        },
        {
          id: 6,
          name: "Student 6",
          math_marks: 95,
          physics_marks: 96,
          chemistry_marks: 91
        },
        {
          id: 7,
          name: "Student 7",
          math_marks: 81,
          physics_marks: 85,
          chemistry_marks: 79
        },
        {
          id: 8,
          name: "Student 8",
          math_marks: 89,
          physics_marks: 92,
          chemistry_marks: 88
        },
        {
          id: 9,
          name: "Student 9",
          math_marks: 72,
          physics_marks: 75,
          chemistry_marks: 70
        },
        {
          id: 10,
          name: "Student 10",
          math_marks: 90,
          physics_marks: 94,
          chemistry_marks: 87
        }
      ];
      
   
    
      
    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math_marks' stroke='gray'></Line>
                <Line dataKey='physics_marks'  stroke='yellow'></Line>
                <Line dataKey='chemistry_marks'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;