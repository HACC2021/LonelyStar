import React, { Component } from 'react';

class OHADatabases extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <p>Thank you for your interest in OHA's databases. OHA currently maintains two databases; the <strong>Papakilo Database</strong> and the <strong>Kipuka Database</strong></p>
                <p><strong>Papakilo Database</strong></p>
                <div aria-label="Page 5" data-page-number="5">
                <div>The Papakilo Database is the ongoing&nbsp;development of a cutting-edge and comprehensive &ldquo;Database of Databases&rdquo; consisting of varied&nbsp;collections of data pertaining to historically and culturally significant places, events, and&nbsp;documents in Hawai'i&rsquo;s history. This online repository of data will greatly increase OHA&rsquo;s ability&nbsp;to preserve and perpetuate cultural and historical information and practices, thus providing&nbsp;an invaluable resource to educate other regulatory agencies, OHA&rsquo;s Native Hawaiian beneficiaries,</div>
                </div>
                <div aria-label="Page 6" data-page-number="6">
                <div>and the public.</div>
                <div><br role="presentation" />A video tutorial on how to use the database and detailed information on searching the database&nbsp;can be found on the Using the Database tab. Please do not hesitate to reach out if you have any&nbsp;questions.</div>
                <div><strong>Kipuka Database</strong></div>
                <div>Mahalo for your interest in the Kipuka Database. The Kipuka Database is a geographical information system (GIS) that utilizes the latest mapping technologies to provide a window into Native Hawaiian land, culture, and history. The mission of Kipuka is to create a repository of knowledge where information about Hawaiʻi&rsquo;s land, culture, and history can be easily accessed, to develop a virtual moʻokuʻauhau of land tenure in Hawai&lsquo;i, and to provide an opportunity for individuals to forge new relationships between themselves and the ʻāina (land) that is most important to them.</div>
                <div> <br role="presentation" /> Video tutorials on how to use the database can be found on the Tutorials tab. Please do not hesitate to reach out if you have any questions. You can also reach out directly to Kipuka <br role="presentation" />Database staff at kipukainfo@oha.org.</div>
                </div>
            </div>
        );
    }
}
 
export default OHADatabases;