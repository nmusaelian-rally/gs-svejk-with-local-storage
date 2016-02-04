class NoteDB {
    constructor(key) {
        this.key = key;
        this.subs = [];
    }
    addSubscriber(sub) {
        this.subs.push(sub);
    }
    addNote(note, school) {
        this.changeDB(function(noteDB) {
            var notes = [];
            if (school in noteDB) {
                notes = noteDB[school]
            }
            notes.unshift(note);
            noteDB[school] = notes
            return noteDB;
        });
    }
    getNotes(school) {
        var noteDB = this.getDB();
        if (school in noteDB) {
            return noteDB[school];
        }
        else {
            return [];
        }
    }
    deleteNote(noteIndex, school) {
        this.changeDB(function(noteDB) {
            if (school in noteDB) {
                var notes = noteDB[school];
                notes.splice(noteIndex, 1);
                noteDB[school] = notes;
            }
            else {
                console.log("Deleting note for school " + school + "that doesn't exist");
            }
            return noteDB;
        });
    }
    
    getDB() {
        var noteDB = localStorage.getItem(this.key);
        if (noteDB == undefined || noteDB == 'undefined') {
            noteDB = {};
        }
        else {
            noteDB = JSON.parse(noteDB);
        }
        return noteDB;
    }
    setDB(noteDB) {
        console.log(noteDB);
        localStorage.setItem(this.key, JSON.stringify(noteDB));
    }
    changeDB(callback) {
        var noteDB = this.getDB();
        noteDB = callback(noteDB);
        this.subs.forEach(function(sub) {
            sub(noteDB);
        });
        this.setDB(noteDB);
    }
}

export default NoteDB;