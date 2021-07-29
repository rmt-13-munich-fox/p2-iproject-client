<template>
<div>
		<div class="join-container centerblock">
			<header class="join-header">
				<h1><i class="fab fa-500px"></i> WibChat</h1>
                <h6> Bring Weeb to the room </h6>
			</header>
			<main class="join-main">
				<form @submit.prevent="gotoChatRoom">
					<div class="form-control">
						<label for="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Enter username..."
							required
                            v-model="username"
						/>
					</div>
					<div class="form-control">
						<label for="room">Room</label>
						<select name="room" id="room" v-model="room">
							<option value="Manga">Manga</option>
							<option value="Anime">Anime</option>
						</select>
					</div>
					<button type="submit" class="btn">Join Chat</button>
				</form>
			</main>
		</div>
        <div class="quotes">
            <h2>{{quotes}}</h2>
            <h4>- {{by}} -</h4>
            <h6>- {{anime}} -</h6>
        </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data () {
        return {
            username: "",
            room: "Manga",
            quotes: "",
            by: "",
            anime: ""
        }
    },
    methods: {
        gotoChatRoom () {
            localStorage.setItem("username", this.username)
            localStorage.setItem("room", this.room)
            this.$store.dispatch("doLogin", {username: this.username, room: this.room})
            // this.$store.commit("PUSH_USER", {username: this.username})
            // this.$store.dispatch("getUser")
            this.$socket.client.emit("joinRoom", localStorage.room)
            this.$socket.client.emit('newUser', {
                username: localStorage.username,
                message: `Hi, ${this.username} has entered the room`
            }, localStorage.room)
            this.$router.push("/home")
        }
    //     joinRoom() {
    //         this.$socket.client.emit("joinRoom", this.room)
    // }
    },
    created () {
        axios({
            method: "GET",
            baseURL: "https://animechan.vercel.app/api/random",
        })
        .then(({data}) => {
            // console.log(data);
            this.quotes = data.quote
            this.by = data.character
            this.anime = data.anime
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
</script>

<style>

.centerblock {
  margin-top: 5%;
  text-align: center;
  /* min-height: 45vh; */
}

.quotes {
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 100px;
    text-align: center;
    padding: 25px;
    background-color: rgba(0, 0, 0, 0.5);
    color: seashell;
}

.quotes h2, h6 {
    font-weight: bold;
}

.quotes h4 {
    font-style: italic;
}

/* .quotes h6 {
    font-weight: bol;
} */

</style>