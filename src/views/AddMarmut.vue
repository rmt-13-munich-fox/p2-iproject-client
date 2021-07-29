<template>
    <section class="addFood">
        <center>
            <h1> Add Marmut </h1>
        </center>
        <form v-on:submit.prevent="addMarmut" enctype=multipart/form-data id="form-add-food">
            <div class="form-group">
                <label>Name : </label>
                <input v-model='name' type="text" placeholder="Enter Food Name" name="name" required>
                <label>Gender : </label>
                <input v-model='gender' type="text" placeholder="Enter Description" name="gender" required>
				<label>Age : </label>
                <input v-model='age' type="number" placeholder="Enter Age" name="Age" required>
                <label>Description : </label>
                <input v-model='description' type="text" placeholder="Enter Description" name="description" required>
                <label>Your name : </label>
                <input v-model='submittedBy' type="text" placeholder="Enter Your Name" name="submittedBy" required>
                <label>Image : </label>
                <input @change="imgFiles" type="file" placeholder="Enter Image" name="imgURL" accept="image/png,image/jpeg" required>
                <button type="submit">Add food</button>
            </div>
        </form>
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
                url: "http://localhost:3000/addmarmut",
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