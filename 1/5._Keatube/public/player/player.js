// todo console.log the path variable!!!
const fullUrl = window.location.href;
const videoId = fullUrl.substr(fullUrl.lastIndexOf("/") + 1);

// todo: Call the backend and retrieve the json about this specific video.

const player = `<video width="320" height="240" controls>
                    <source src="/${videoId}">
                    Your browser does not support the video tag.
                </video>`;

$("#player-wrapper").append(player);