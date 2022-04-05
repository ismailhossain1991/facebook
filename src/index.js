import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import  './index.css';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/alert';
import axios from 'axios';
import Post from './componant/post';
import Alert from './componant/alert';



const  user_photo  = document.getElementById('user-profile');


document.addEventListener('DOMContentLoaded', getposts);

//get element 
document.getElementById('form_modal').addEventListener('submit', createpost);
const msg = document.querySelector('.msg');

function getposts(){ axios.get('http://localhost:5070/posts').then(res => {Post.showposts(res.data); });

}



function createpost (e){
    e.preventDefault()

    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());

    if(data.name==''|| data.uphoto==''|| data.content==''){
        
       msg.innerHTML = Alert.danger('All Feild Are Requerd')
    }else{

        axios.post('http://localhost:5070/posts', {

            name :  data.name,
            user_photo  : data.uphoto,
            content : data.content,
            post_photo : data.photo
         
            }).then(res => {
         
         
     })

    }

  


}




