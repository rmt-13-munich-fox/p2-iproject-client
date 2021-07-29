<template>
    <section class="addFood">
        <center>
        </center>
        <div class="form-group">
            <form v-on:submit.prevent="addMarmut">
                    <div class="form-group">
                        <label class="justify-content-center" for="guineapigsname">Guinea pig's name</label>
                        <input v-model='name' type="name" class="form-control" id="guineapigsname" aria-describedby="textHelp" placeholder="Enter your cavy's name">
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender</label>
                        <select v-model="gender" class="form-control" id="gender">
                            <option>Choose your guinea pig's gender</option>
                            <option>Boar (Male)</option>
                            <option>Sow (Female)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputtext1">Age</label>
                        <input v-model='age' type="number" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputtext2">Description</label>
                        <input v-model="description" type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="Tell use about your cavy!">
                      
                    </div>
                    <div class="form-group">
                        <label for="exampleInputtext3">Your Name</label>
                        <input v-model="submittedBy" type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="What's your name ?">
                      
                    </div>
                    <div class="form-group">
                        <input @change="imgFiles" type="file" placeholder="Enter Image" name="imgURL" accept="image/png,image/jpeg" required>
                        <button type="submit">Add Guinea Pig</button>
                    </div>
            </form>
        </div>
    </section>
</template>

<script>
    import axios from "axios"
    export default {
        name: 'addmarmut',
        data() {
            return {
                name: "",
                age: "",
                gender: "",
                imgURL: "",
                submittedBy: "",
                description: ""
            }
        },
        methods: {
            addMarmut(event) {
                let form = new FormData();
                console.log(form)
                form.append("name", this.name)
                form.append("age", this.age)
                form.append("imgURL", this.imgURL)
                form.append("gender", this.gender)
                form.append("submittedBy", this.submittedBy)
                form.append("description", this.description)

                axios({
                        method: "POST",
                        url: "https://ayahmarmut.herokuapp.com/addmarmut",
                        data: form,
                        headers: {
                            access_token: localStorage.getItem("access_token")
                        }
                    })
                    .then(response => {
                        swal("Successfully added new marmut")
                        this.name = ""
                        this.submittedBy = ""
                        this.imgURL = ""
                        this.age = ""
                        this.description = ""
                        this.gender = ""
                    })
                    .catch(err => {
                        swal('err')
                    })
            },
            imgFiles(event) {
                // console.log(event)
                this.imgURL = event.target.files[0]
            },
        }
    }
</script>