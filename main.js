 showNotes();


    // If user adds a note, add it to the localStorage

    let addBtn = document.getElementById("addBtn");

    addBtn.addEventListener("click", function (e) {
      let addTxt = document.getElementById("addTxt");
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
      notesObj.push(addTxt.value);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      addTxt.value = "";

      //   console.log(notesObj);
      showNotes();
    });

    // Function to show elements from localStorage
    function showNotes() {
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
      let html = "";
      notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note : ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger">Delete</button>
                        <button id="${index}"onclick="editNote(this.id)" class="btn btn-secondary"> Edit</button>
                    </div>
                </div>`;
      });
      let notesElm = document.getElementById("notes");
      if (notesObj.length != 0) {
        notesElm.innerHTML = html;
      } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
    }

    // Function to delete a note
    function deleteNote(index) {
      //   console.log("I am deleting", index);

      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }

      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
    }

    function editNote(index) {
      let notes = notesObj[index];

      const textarea = document.getElementById('addTxt');

      //  Append text
      textarea.value += notesObj[index];

      const btn = document.getElementById('addBtn');

      // Append text on button click
      btn.addEventListener('click', function handleClick() {
        textarea.value += '';
      });
      deleteNote(index);
    }
