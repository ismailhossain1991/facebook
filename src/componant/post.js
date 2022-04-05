
class Post {

    constructor (){
        this.post_timsLine = document.getElementById('post-timeline-load');
    }

         showposts(posts){
let post = ''
console.log(posts);
posts.map((data, index) =>{
let {name, user_photo, content, post_photo}=data;
    post   =`
                                    <div class="card shadow-sm my-3">
                                    <div class="card-body">
                                        <div class="user-timeline-info d-flex  justify-content-between">
                                            <div class="user-info d-flex">
                                                <img id="user-timeline-profile" src="${user_photo}" alt="">
                                                <h3>${name}</h3>
                                            </div>
                                            <button>...</button>
                                        </div>
                                            <div class="user-post-content">
                                                <p>${content}</p>

                                                    <img class="w-100" src="${post_photo}" alt="">
                                                </div>
                                    </div>
                                </div>

    `;

});
        this.post_timsLine.innerHTML = post;

    }

}

let post = new Post;
export default post;