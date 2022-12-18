"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8663],{740958:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-fcc419c8","path":"/advanced/support-new-devices/03_find_tuya_data_points.html","title":"Find Tuya Data Points","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Requirements and caveats","slug":"requirements-and-caveats","link":"#requirements-and-caveats","children":[]},{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[{"level":3,"title":"1. Standard part of the setup","slug":"_1-standard-part-of-the-setup","link":"#_1-standard-part-of-the-setup","children":[]},{"level":3,"title":"2. Signin up for Tuya IoT Platform","slug":"_2-signin-up-for-tuya-iot-platform","link":"#_2-signin-up-for-tuya-iot-platform","children":[]},{"level":3,"title":"3. Select development plan","slug":"_3-select-development-plan","link":"#_3-select-development-plan","children":[]},{"level":3,"title":"4. Confirm service purchase","slug":"_4-confirm-service-purchase","link":"#_4-confirm-service-purchase","children":[]},{"level":3,"title":"5. Create a cloud project","slug":"_5-create-a-cloud-project","link":"#_5-create-a-cloud-project","children":[]},{"level":3,"title":"6. Link your Tuya account with your new Tuya project","slug":"_6-link-your-tuya-account-with-your-new-tuya-project","link":"#_6-link-your-tuya-account-with-your-new-tuya-project","children":[]},{"level":3,"title":"7. Find your devices","slug":"_7-find-your-devices","link":"#_7-find-your-devices","children":[]},{"level":3,"title":"8. Display device logs","slug":"_8-display-device-logs","link":"#_8-display-device-logs","children":[]},{"level":3,"title":"9. Find your Data Point!!","slug":"_9-find-your-data-point","link":"#_9-find-your-data-point","children":[]},{"level":3,"title":"10. Rinse, and repeat!","slug":"_10-rinse-and-repeat","link":"#_10-rinse-and-repeat","children":[]}]}],"git":{"updatedTime":1671365670000},"filePathRelative":"advanced/support-new-devices/03_find_tuya_data_points.md"}')},909387:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var o=a(166252);const i=a.p+"assets/img/01_sign_up.15520386.png",n=a.p+"assets/img/02_development_plan.a02bd8ec.png",r=a.p+"assets/img/03_service_purchase.74f78847.png",c=a.p+"assets/img/04_create_cloud_project.4325eb57.png",d=a.p+"assets/img/05_project_creation.8317cc1e.png",s=a.p+"assets/img/06_configuration_wizard.c109af22.png",l=a.p+"assets/img/07_link_tuya_account.d75fc805.png",u=a.p+"assets/img/08_devices.a8c64880.png",h=a.p+"assets/img/09_device_logs.1435750f.png",p=a.p+"assets/img/10_dev_tools.5d449195.png",y=(0,o.uE)('<h1 id="find-tuya-data-points" tabindex="-1"><a class="header-anchor" href="#find-tuya-data-points" aria-hidden="true">#</a> Find Tuya Data Points</h1><p>Tuya devices use a custom <code>manuSpecificTuya</code> cluster. Within the reported values of this cluster&#39;s data is a dp (so called “Data Point ID”) which is at the core of Tuya devices. From the point of view of a device the DPIDs are the functions that the device provides. The instructions below will help you use the Tuya IoT Platform with a Tuya gateway to determine the functions of the datapoints which, will later assist in the creation of a device converter.</p><h2 id="requirements-and-caveats" tabindex="-1"><a class="header-anchor" href="#requirements-and-caveats" aria-hidden="true">#</a> Requirements and caveats</h2><ol><li>You will need an up-to-date version of Google Chrome (other browsers may work but, instructions may differ)</li><li>You will require basic knowledge of using Chrome and its Dev Tools</li><li>You will need to sign up for the Tuya IoT Platform and bind your accounts (more details below)</li><li>You will require a Tuya Zigbee Gateway</li><li>You will need the Tuya app (Tuya Smart) installed on your mobile device</li></ol><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h2><h3 id="_1-standard-part-of-the-setup" tabindex="-1"><a class="header-anchor" href="#_1-standard-part-of-the-setup" aria-hidden="true">#</a> 1. Standard part of the setup</h3><p>Ensure that you have set up a Tuya account and bound your Zigbee device to the Tuya gateway (these instructions will assume this has already been done).</p><h3 id="_2-signin-up-for-tuya-iot-platform" tabindex="-1"><a class="header-anchor" href="#_2-signin-up-for-tuya-iot-platform" aria-hidden="true">#</a> 2. Signin up for Tuya IoT Platform</h3><p>The Tuya IoT Platform is the backbone for how internet connected Tuya devices communicate back to the Tuya platform. It contains a suite of Application Programming Interfaces (API&#39;s) which allow for developers to embed the Tuya functionality within their own platforms.</p>',9),f={href:"https://iot.tuya.com/",target:"_blank",rel:"noopener noreferrer"},m=(0,o.uE)('<p><img src="'+i+'" alt="01_sign_up"></p><h3 id="_3-select-development-plan" tabindex="-1"><a class="header-anchor" href="#_3-select-development-plan" aria-hidden="true">#</a> 3. Select development plan</h3><p>Once your account has been confirmed, use your new credentials to login to the Tuya IoT Platform. You will be greeted with a first time tutorial showing you around the platform. Once completed, you will be prompted to set up a Cloud Development Plan. Click on <code>Free Trial</code> - Please note, that unless you are doing millions of calls to your new service (which we won&#39;t be), the plan will be completely free, and auto-renews annually.</p><p><img src="'+n+'" alt="02_development_plan"></p><h3 id="_4-confirm-service-purchase" tabindex="-1"><a class="header-anchor" href="#_4-confirm-service-purchase" aria-hidden="true">#</a> 4. Confirm service purchase</h3><p>Once you have selected the Free Trial plan, you will be taken to a confirm service purchase screen. Double check to make sure that the <code>TRIAL EDITION</code> option is selected, and the Total shows $0.00 then, click <code>Buy Now</code>.</p><p><img src="'+r+'" alt="03_service_purchase"></p><h3 id="_5-create-a-cloud-project" tabindex="-1"><a class="header-anchor" href="#_5-create-a-cloud-project" aria-hidden="true">#</a> 5. Create a cloud project</h3><p>Once you purchased your API service, click on <code>Cloud</code> in the side menu, <code>Development</code> in the sub-menu and then click on <code>Create Cloud Project</code>.</p><p><img src="'+c+'" alt="04_create_cloud_project"></p><p>In the newly opened dialog box, fill in the details as required, enduring that the Development Method is selected as Smart Home, and the Data Center corresponds to the region that your Tuya account is associated with.</p><p><img src="'+d+'" alt="05_project_creation"></p><p>Once confirmed, a new dialog box will open. Ensure that the relevent Smart Home API services are populated in the right hand list.</p><p><img src="'+s+'" alt="06_configuration_wizard"></p><h3 id="_6-link-your-tuya-account-with-your-new-tuya-project" tabindex="-1"><a class="header-anchor" href="#_6-link-your-tuya-account-with-your-new-tuya-project" aria-hidden="true">#</a> 6. Link your Tuya account with your new Tuya project</h3><p>Once confirmed, you should be taken to your new Tuya project. Click on <code>Link Tuya App Account</code>, then <code>Add App Account</code>.</p><p><img src="'+l+'" alt="07_link_tuya_account"></p><p>This should bring up a QR code. Go in to the Tuya app on your mobile device, click on <code>[+]</code> (as id you are adding a new device). At the top of the screen, you will see a scan barcode button <code>[-]</code>. Click the <code>[-]</code> button and give permissions to use the camera (if prompted). Scan the QR code with your mobile device, and your account should appear in the App Account List in the Tuya IoT Platform.</p><h3 id="_7-find-your-devices" tabindex="-1"><a class="header-anchor" href="#_7-find-your-devices" aria-hidden="true">#</a> 7. Find your devices</h3><p>Click on the <code>All Devices</code> and find the device in-which you wish to find the Data Points. Click on <code>Debug Device</code>. If you do not find your device in the list, or the list is empty, plese check your project&#39;s region.</p><p><img src="'+u+'" alt="08_devices"></p><h3 id="_8-display-device-logs" tabindex="-1"><a class="header-anchor" href="#_8-display-device-logs" aria-hidden="true">#</a> 8. Display device logs</h3><p>Click on the <code>Device Logs</code> tab, and you will see a list of all events that the device has sent to the Tuya platform. Ignore the Event Details section as this appears to be garbage.</p><p><img src="'+h+'" alt="09_device_logs"></p><h3 id="_9-find-your-data-point" tabindex="-1"><a class="header-anchor" href="#_9-find-your-data-point" aria-hidden="true">#</a> 9. Find your Data Point!!</h3><p>Select the Data Point for-which you wish to find the ID for in the drop-down list above the events table. Open up Dev Tools by pressing <code>ctrl</code> + <code>shift</code> + <code>i</code> on your keyboard, or going to the <code>3-dot menu</code> at the top-right of the Chrome window-&gt;<code>More Tools</code>-&gt;<code>Dev Tools</code>. When Dev Tools is open, click on the <code>Network</code> Tab, then click the <code>Search</code> button in the Tuya IoT Platform window.</p><p><img src="'+p+'" alt="10_dev_tools"></p><p>You should see a number of calls appear in the <code>Name</code> section of Dev Tools. The call that we are interested in it <code>list</code>. Click this, and scroll down in the right-hand pane until you see the <code>Request Payload</code> section. Within there, is a json encoded object which contains all of the data sent from the search function. One of the keys is labelled <code>code</code>. This <code>code</code> i.e. 112 is the value for your Data Point ID!</p><h3 id="_10-rinse-and-repeat" tabindex="-1"><a class="header-anchor" href="#_10-rinse-and-repeat" aria-hidden="true">#</a> 10. Rinse, and repeat!</h3><p>You should now iterate through each of the Data Points that are available in the drop-down list. Once finished, follow the other How-To guides to map these Data Point&#39;s into converters.</p>',30),v={},g=(0,a(983744).Z)(v,[["render",function(e,t){const a=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[y,(0,o._)("p",null,[(0,o.Uk)("Visit "),(0,o._)("a",f,[(0,o.Uk)("Tuya IoT Platform"),(0,o.Wm)(a)]),(0,o.Uk)(" and sign up for a new account (if you don't already have one):")]),m])}]])}}]);