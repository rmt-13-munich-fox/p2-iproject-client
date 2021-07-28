<template>
		<div class="join-container centerblock">
			<header class="join-header">
				<h1><i class="fas fa-smile"></i> Hacktiv8</h1>
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
					<!-- <div class="form-control">
						<label for="room">Room</label>
						<select name="room" id="room" v-model="room">
							<option value="JavaScript">JavaScript</option>
							<option value="Python">Python</option>
							<option value="PHP">PHP</option>
							<option value="C#">C#</option>
							<option value="Ruby">Ruby</option>
							<option value="Java">Java</option>
						</select>
					</div> -->
					<button type="submit" class="btn">Join Chat</button>
				</form>
			</main>
		</div>
</template>

<script>
export default {
    name: "Login",
    data () {
        return {
            username: "",
        }
    },
    methods: {
        gotoChatRoom () {
            localStorage.setItem("username", this.username)
            this.$store.dispatch("doLogin", {username: this.username})
            // this.$store.commit("PUSH_USER", {username: this.username})
            // this.$store.dispatch("getUser")
            this.$socket.client.emit('newUser', {
                username: localStorage.username,
                message: `Hi, ${this.username} has entered the room`
            })
            this.$router.push("/home")
        }
    }
}
</script>

<style>

.centerblock {
  margin-top: 8%;
  text-align: center;
}


</style>