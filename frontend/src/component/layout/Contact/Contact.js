import React from "react";
import "./Contact.css";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';


function Contact() {
   

  return (
    <div className="Contact"> 
      <Typography gutterBottom variant="h5" align="center">
        Feel Free To Contact Us
       </Typography>

       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15920217.265703019!2d59.140914750000015!3d13.050192900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae177eca7756c9%3A0x3507209562ab16f6!2sPresidency%20College!5e0!3m2!1sen!2sin!4v1690029746457!5m2!1sen!2sin"
        width= "100%"
        height="300"
         style={{border:0}} 
         allowFullScreen="" 
         loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">

          </iframe>

      <Grid>
        <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us Form
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 

            <form action="https://formspree.io/f/meqboyne" method="POST" className="contact-inputs">             
              <Grid container spacing={1} >
                <Grid item xs={12} >
                  <TextField name="Name" placeholder="Enter your name" label="Name" variant="outlined" fullWidth required />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField type="email" name="Email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" name="Phone no." placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" name="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Contact;
