function Id({ course, rollnumber }) {
    const Idstyle = {
        border: '2px solid black',
        borderRadius: '10%',
    textAlign: 'center',
    padding: '50px'
}
return (
    <div style={Idstyle}>
        <img src="./pic.jpg" alt="" className="img" />
        <div className="details">
            <h2>B.Trisha</h2>
            <p>Course:{course}</p>
            <p>Rollnumber:{rollnumber}</p>
            <p>BloodGroup:o+</p>
            <p>DOB:02/03/2005</p>
        </div>
    </div>
)
}
export default Id;