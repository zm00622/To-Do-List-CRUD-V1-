
var app = new function() {
  this.el = document.getElementById('tasks');

  this.tasks = [];

  // Read
  
  this.FetchAll = function() {
    var data = '';

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += '<tr>';

        // (i+1) sets the task number while this.tasks[i] names the task the user inputs.
        data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
        // Ex: 1. Clean the house
        // Ex: 2. Workout

        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
        // app.Edit executes the edit function on button click

        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
        // app.Delete executes the delete function on button click

        data += '</tr>';
      }
    }

    this.Count(this.tasks.length);
    return this.el.innerHTML = data;
  };

  // Create

  this.Add = function () {
    el = document.getElementById('add-todo');
    // Get the value from add-todo text input box
    var task = el.value;

    if (task) {
      // Add the new value
      this.tasks.push(task.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };

// Update

  this.Edit = function (item) {
    var el = document.getElementById('edit-todo');
    // Display value in the field
    el.value = this.tasks[item];
    // Display fields
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      // Get value
      var task = el.value;

      if (task) {
        // Edit value
        self.tasks.splice(item, 1, task.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };

// Delete

  this.Delete = function (item) {
    // Delete the current row
    this.tasks.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };

  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'Tasks';

    if (data) {
        if(data ==1){
            name = 'Task'
        }
      el.innerHTML = data + ' ' + name ;
    } 
    else {
      el.innerHTML = 'No ' + name;
    }
  };
  
}

app.FetchAll();

function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}