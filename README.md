  # **betterReads**

  ## a reading app

  ### SEIR Project 4

betterReads is a book tracking and organization app. The goal is to create a simple, easy-to-use app to track the books you are interested in reading.

All functionality is user-specific, so one must be logged-in to use betterReads.

  ## Screenshots:

![figma main page](https://i.imgur.com/JKE9B81.png | width=400)
![figma view page](https://i.imgur.com/Qjc3O02.png | width=400)

![user home](https://i.ibb.co/T2LtC4X/Screenshot-2024-02-05-at-9-55-44-AM.png | width=400)
![search dropdown](https://i.ibb.co/vL2HXHS/Screenshot-2024-02-05-at-9-59-16-AM.png | width=400)
![expanded shelf](https://i.ibb.co/fMbntQX/Screenshot-2024-02-05-at-9-59-56-AM.png | width=400)

  ## Technologies Used:

  React <br>
  Express <br>
  Node <br>
  MongoDB <br>

  ## Links:
[figma](https://www.figma.com/file/ZUFuN2J1d3dFuZNkI9a82x/better-reads?type=whiteboard&node-id=0-1&t=xIhk7ISaHVn3LXYd-0)
<br>
[deployed app](https://better-reads-app-9bf78ec998e2.herokuapp.com/)

  ## Future Enhancements

  I intend to implement review functionality on titles. The underpinnings are there, but I haven't gotten it to work yet.

  A favorites list will be added in the future.

  I also want to add a Notes feature to log user-created notes specific to a title and "bookmarked" to a particular page in a volume.


  ## Challenges

Initially, I intended to make a separate page for each shelf so that a user could view all titles saved in a particular shelf. Instead, I added the "expanding shelf" See All functionality, which I am very happy with.

The Google Books API was relatively easy to integrate, but I am still running into issues filtering the data I get from the API into a consistently-usable format. For instance, some titles have only a 10-digit ISBN, some have 10- and 13-digit ISBNs, some have no ISBN and instead use a Google-generated GG- prefix (which tends to break things).

The biggest challenge has actually been using the API-supplied image files. Most of the time, the thumbnails provided come in at least six different sizes, but this seems to also vary a lot by title. Getting the higher-resolution images to render on the BookViewPage has still not been solved, and sometimes a variation of the included images results in a failed search.