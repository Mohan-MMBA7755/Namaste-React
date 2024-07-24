const Contact = ()=>{
    return(
        <div>
            <h1 className="p-4 m-4 font-bold text-lg">Contact Us</h1>
            <form method="post">
                <input type="text" className="border border-black m-4 p-2" placeholder="name"></input>
                <br/>
                <input type="text" className="border border-black m-4 p-2"  placeholder="message"></input>
                <br/>
                <button className="bg-red-200 text-white rounded-lg p-2 m-4">Submit</button>
            </form>
        </div>
    )
}

export default Contact;


