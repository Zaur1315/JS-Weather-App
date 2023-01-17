
//54867939e16c7c928c2947ffc698ed28

const link = `http://api.openweathermap.org/geo/1.0/direct?q=azerbaijan&appid=54867939e16c7c928c2947ffc698ed28`;


const fetchData = async () => {
    const result = await fetch(`${link}&query=london`);
    const data = await result.json();
    console.log(data)
}


fetchData();