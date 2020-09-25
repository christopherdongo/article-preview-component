//variable
const iconShare = document.querySelector('#iconshare');
const notification = document.querySelector('#notification');
const icon = document.querySelector('#icon-share');

//listener
icon.addEventListener('click', Notification)

//function
function Notification(){
        if(notification.classList.contains('activate')){
                notification.classList.remove('activate')
                icon.classList.remove('icon-background')
                iconShare.classList.remove('share-background')
        }else{
                notification.classList.add('activate')

        }
}


