$(document).ready(function() {
// add state names to drop down
var stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
// add values to menu using a for loop
stateNames.forEach(function(state) {
	$('select').append('<option>'+state+'<state>')
})
// match links with state names
var links = {
	Alabama : 'https://www.alabamavotes.gov/downloads/election/vr/nvra-2.pdf',
	Alaska : 'https://www.elections.alaska.gov/doc/forms/C03.pdf',
	Arizona : 'http://www.azsos.gov/sites/azsos.gov/files/voter_registration_form.pdf',
	Arkansas : 'http://www.sos.arkansas.gov/elections/documents/voter_reg_ap_6-11.pdf',
	California : 'https://covr.sos.ca.gov/?language=en-US',
	Colorado : 'https://www.sos.state.co.us/pubs/elections/vote/VoterRegFormEnglish.pdf',
	Connecticut : 'http://www.ct.gov/sots/LIB/sots/ElectionServices/ElectForms/electforms/ed671.pdf',
	Delaware : 'https://ivote.de.gov/',
	DistrictofColumbia : 'https://www.dcboee.org/pdf_files/Mail_VRForm_HAVA2003.pdf',
	Florida : 'http://dos.myflorida.com/media/693757/dsde39.pdf',
	Georiga : 'http://sos.ga.gov/admin/files/Voter_Registration_Application_8-10.pdf',
	Hawaii : 'http://elections.hawaii.gov/wp-content/uploads/2015/03/VR-Form-English.pdf',
	Idaho : 'http://www.idahovotes.gov/VoterReg/voter_registration.pdf',
	Illinois : 'http://www.elections.state.il.us/downloads/votinginformation/pdf/r-19.pdf',
	Indiana : 'https://forms.in.gov/Download.aspx?id=9341',
	Iowa : 'https://sos.iowa.gov/elections/pdf/voteapp.pdf',
	Kansas : 'https://www.kssos.org/forms/elections/voterregistration.pdf',
	Kentucky : 'http://elect.ky.gov/sitecollectiondocuments/register%20to%20vote/kentucky%20voter%20registration%20card.pdf',
	Louisiana : 'http://www.sos.la.gov/ElectionsAndVoting/PublishedDocuments/ApplicationToRegisterToVote.pdf',
	Maine : 'http://www.maine.gov/sos/cec/elec/data/voterregcard2012.pdf',
	Maryland : 'http://www.elections.state.md.us/voter_registration/documents/2012_English_Internet_VRA.pdf',
	Massachusetts : 'https://www.sec.state.ma.us/ele/elepdf/Voter-reg-mail-in.pdf',
	Michigan : 'https://www.michigan.gov/documents/MIVoterRegistration_97046_7.pdf',
	Minnesota : 'http://www.sos.state.mn.us/Modules/ShowDocument.aspx?documentid=4222',
	Mississippi : 'https://www.sos.ms.gov/Elections-Voting/Documents/Voter_Registration.pdf',
	Missouri : 'https://dss.mo.gov/fsd/voter_registration.pdf',
	Montana : 'http://sos.mt.gov/elections/officials/forms/documents/Voter-Registration-Application.pdf',
	Nebraska : 'http://www.sos.ne.gov/elec/pdf/vr.pdf',
	Nevada : 'http://nvsos.gov/SOSVoterRegForm/VoterForm.aspx',
	NewHampshire : 'http://www.longdistancevoter.org/files/voter_forms/NewHampshire_voterreg_english.pdf',
	NewJersey : 'http://nj.gov/counties/mercer/officials/clerk/pdf/updated_voter_reg_form.pdf',
	NewMexico : 'http://www.eac.gov/assets/1/Documents/Federal%20Voter%20Registration_6-25-14_ENG.pdf',
	NewYork : 'http://www.elections.ny.gov/NYSBOE/download/voting/voteform.pdf',
	NorthCarolina : 'https://www.ncsbe.gov/ncsbe/Portals/0/FilesP/NCVRRegFormv102013eng.pdf',
	NorthDakota : 'https://vip.sos.nd.gov/pdfs/portals/votereg.pdf',
	Ohio : 'http://www.sos.state.oh.us/sos/upload/elections/forms/4010.pdf',
	Oklahoma : 'https://www.ok.gov/elections/documents/Oklahoma%20Voter%20Registration%20Application%20form%20v4-20%20SEB%20web.pdf',
	Oregon : 'https://secure.sos.state.or.us/orestar/vr/register.do?source=DMV#',
	Pennsylvania : 'http://www.dosimages.pa.gov/pdf/OnlineVoterRegFormBlank.pdf',
	RhodeIsland : 'http://www.elections.ri.gov/publications/Election_Publications/Voter_Registration/December_2012_RI_English_VRF.pdf',
	SouthCarolina : 'http://www.scvotes.org/files/VR_Blank_Form.pdf',
	SouthDakota : 'https://sdsos.gov/elections-voting/assets/VoterRegistrationFormFillable.pdf',
	Tennessee : 'http://share.tn.gov/sos/election/forms/ss-3010.pdf',
	Texas : 'https://webservices.sos.state.tx.us/vrrequest/index.asp',
	Utah : 'http://elections.utah.gov/Media/Default/Forms/Utah%20Voter%20Registration%20Form.pdf',
	Vermont : 'https://www.sec.state.vt.us/media/33935/VTVoterApp.pdf',
	Virginia : 'http://elections.virginia.gov/Files/Forms/VoterForms/VoterRegistrationApplication.pdf',
	Washington : 'http://www.sos.wa.gov/_assets/elections/vrf_english_fillable_web.pdf',
	WestVirginia : 'https://ovr.sos.wv.gov/Register#Qualifications',
	Wisconsin : 'http://www.gab.wi.gov/sites/default/files/gab_forms/4/2gab_131_voter_registration_app_rev_2014_05_filla__19781.pdf',
	Wyoming : 'http://soswy.state.wy.us/forms/elections/general/voterregistrationform.pdf'
}
// when user changes input of drop down menu, take them to appropriate link
function selectState () {
// get value of user input by using '$.val()'
	var state = $('select').val();
	var stateLink = links[state];
	var htmlStateLink = '<a href="'+stateLink+'">'+state+'</a>'
// take variables and tell site to go link when selected
 	$('.reglinks').html(htmlStateLink)
}
$('select').change(selectState)
})