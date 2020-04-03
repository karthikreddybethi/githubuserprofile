//Init 
const github = new Github();

//init user profile
const ui = new UI();

//Search Input

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    
    if(userText !== '') {
        github.getUser(userText)
        .then( data => {
            if(data.profile.message === 'Not Found') {
                //Show alert
                ui.showAlert('User not found','alert alert-danger')
            } else {
                //Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                // ui.showRepos()
                console.log(data.profile);
            }
            
        })
    } else {
        //clear profile
        ui.clearProfile();
    }

       
})

