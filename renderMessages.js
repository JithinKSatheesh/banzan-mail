

const renderMessage_1 = ({ name, email, phoneNo, message, linkedin, company }) => {

    return (
        `
                <h4 style="padding:10px; text-aligh:center;background-color:#fbe05a; color:#1b1d1c;" >
                    Message from ${name} 
                </h4>
                <div> ------------------------------- </div>
                <p> ${message} </p>
                
                <div> ------------------------------- </div>
                <div> name : ${name} </div>
                <div> email : ${email} </div>
                <div> phoneNo : ${phoneNo} </div>
                <div> company : ${company} </div>
                <div> linkedin : ${linkedin} </div>
                <h4 style="padding:10px; text-aligh:center;background-color:#fbe05a; color:#1b1d1c;" >
                    banzan @ 2021
                </h4>

            `
    );
};


const renderMessage_2 = ({ name, email, phoneNo, message, job, education, relocate }) => {

    return (
        `       
            <div style="" >
                <h4 style="padding:10px; text-aligh:center;background-color:#fbe05a; color:#1b1d1c;" >
                     Message from ${name} 
                </h4>
                <div> ------------------------------- </div>
                <p > ${message} </p>
                
                <div> ------------------------------- </div>
                <div> name : ${name} </div>
                <div> email : ${email} </div>
                <div> phoneNo : ${phoneNo} </div>
                <div> Education : ${education} </div>
                <div> ------------------------------- </div>

                <div> Job preference : ${job} </div>
                <div> Willing to relocate : ${relocate} </div>
                <h4 style="padding:10px; text-aligh:center;background-color:#fbe05a; color:#1b1d1c;" >
                        banzan @ 2021
                 </h4>
                
            </div>
            `
    );
};


exports.renderMessage_1 = renderMessage_1;
exports.renderMessage_2 = renderMessage_2;
