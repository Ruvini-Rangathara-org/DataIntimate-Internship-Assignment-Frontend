'use client'
import { useEffect } from "react"
import { Chart } from "chart.js";
function DoughnutChart() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Accepted", "Pending", "Rejected"],
                datasets: [{
                    data: [70, 10, 6],
                    borderColor: [
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                    ],
                    backgroundColor: [
                        "rgb(75, 192, 192 )",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },

        });
    }, [])


    return (
        <>
            {/*<h1 className=" mx-auto text-xl font-semibold capitalize ">Doughnut Chart</h1>*/}
            <div className="flex mx-auto my-auto w-[100%] h-auto">
                <div className=' pt-0 w-full h-fit my-auto'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default DoughnutChart;