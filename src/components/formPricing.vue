<template>
        <div id="container1" class="container">
            <h2 class="text-center"> <u>Pricing details</u>  </h2>
            <form v-on:submit.prevent="submitPricing">
                <div id="form-group">
                    <label for=""> Name : *required </label>
                    <input type="text" name="name" class="form-control" placeholder="johndoe" v-model="paxName" required>
                </div>
                <br>
                <div id="form-group">
                    <label for=""> Address : *required </label>
                    <input type="text" name="address" class="form-control" placeholder="1624 Grassy View Dr" v-model="address" required>
                </div>
                <br>
                <div id="form-group">
                    <label for=""> Country : *required</label>
                    <input type="text" name="country" class="form-control" placeholder="USA" v-model="country" required>
                </div>
                <br>
                    <button class="btn btn-primary" v-on:click.prevent="downloadPDF" >See pricing in PDF..</button>
                <br>
            </form>
        </div>
</template>

<script>
import {mapState} from 'vuex'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export default {
    name: "formPricing",
    data(){
        return { 
            paxName: "",
            address: "",
            country: "",

        }
    },
    computed : {
        ...mapState(["travelDetail"])
    },
    methods: {
        downloadPDF(){
            let pdf = new jsPDF()

            let timeStamp = new Date().getTime()
            // pdf.text(`Name: ${this.paxName}`, 10, 20)
            pdf.text(`Invoice`, 162, 15)
            pdf.line(162,16,180,16)
            pdf.text(`${timeStamp}`, 150, 22)
            pdf.text(`Address: ${this.paxName}`, 10, 15)
            pdf.text(`Country: ${this.paxName}`, 10, 25)
            pdf.text(`Tour: ${this.travelDetail.name}`, 10, 35)
            pdf.text(`Date: 29-07-2021`, 150, 35)
            pdf.line(0,45,400,45)
            autoTable(pdf, {
                theme: "grid",
                head: [["Particulars", "Amount (USD)"]],
                margin: { top: 50 },
                body: [
                    [`${this.travelDetail.durations} Package`, ""],
                    [`${this.paxName}`, ""],
                    [``, ""],
                    [``, ""],
                    [`Payment due date 5-08-2021`, `$ ${this.travelDetail.price}`],
                ],
            })
            pdf.line(145,110,190,110)
            pdf.text(`administrator`, 150, 115)

            pdf.save('plan.pdf')
            this.paxName = ""
            this.address = ""
            this.country = ""
        }
    }
}
</script>

<style>

</style>