import '../components/Triall.css';


function Detail() {

    return (
        <div className="big-div">
            <div className="head">
                <di className="head-title">
                    <div>
                        <h3>Welcome</h3>
                        <p>Tue, 07 June 2023</p>
                    </div>
                    <input type="text" placeholder='John' />
                </di>
            </div>

            <div className='form-head'>
                <div className='form-img'>
                    <div>
                        <img src='' alt='avatar'/>
                        <h4>Alexa Rawles</h4>
                        <p>alexarawles@gmail.com</p>
                    </div>
                    <button type='submit'>Edit</button>
                </div>

                <div className='forms'>
                    <div className='form-1'>
                    <form className='form1'>
                        
                        <div>
                            <label>First Name</label>
                            <input type='text' placeholder='John'/>
                        </div>
                        <div>
                            <label>Student Id</label>
                            <input type='text' placeholder='Student Id'/>
                        </div>
                        <div>
                            <label>Date of Birth</label>
                            <input type='text' placeholder='Date of birth'/>
                        </div>
                        <div>
                            <label>Enrollment Date</label>
                            <input type='text' placeholder='Enrollment Date' />
                        </div>
                    </form>
                    </div>

                    <div className='form-2'>
                        <form>
                            <div>
                                <label>Last Name</label>
                                <input type='text' placeholder='Last Name'/>
                            </div>

                            <div>
                                <label>Email</label>
                                <input type='text' placeholder='Email'/>
                            </div>

                            <div>
                                <label>Contant Number</label>
                                <input type='number' placeholder='+250000000' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <h3>My email Address</h3>
                <div>
                    <img src=''/>
                    <p>alexarawless@gmail.com</p>
                    <p>1 month ago</p>
                </div>
            </div>

            <div>
                <img src=''/>
                <button>Go back</button>
            </div>
        </div>
    );
}
export default Detail;