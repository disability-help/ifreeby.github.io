$(document).ready(function(){var euNations=[];euNations[15]='Austria';euNations[22]='Belgium';euNations[33]='Bulgaria';euNations[1060]='Croatia';euNations[50]='Cyprus';euNations[51]='Czech Republic';euNations[52]='Denmark';euNations[58]='Estonia';euNations[62]='Finland';euNations[63]='France';euNations[67]='Germany';euNations[70]='Greece';euNations[80]='Hungary';euNations[86]='Ireland';euNations[88]='Italy';euNations[98]='Latvia';euNations[104]='Lithuania';euNations[105]='Luxembourg';euNations[113]='Malta';euNations[128]='Netherlands';euNations[143]='Poland';euNations[144]='Portugal';euNations[148]='Romania';euNations[160]='Slovenia';euNations[165]='Spain';euNations[174]='Sweden';euNations[190]='United Kingdom';signupCountryCheckCall(null);function signupCountryCheckCall(offer_listing_id){var url="/signupCountryCheck/signupCountryCheckCall";var data={offerListingId:offer_listing_id};jQuery.post(url,function(returnedData){}).done(signupCallSuccess);}
function signupCallSuccess(returnedData)
{var returnedSignupObject=JSON.parse(returnedData);var offer_listing_id=returnedSignupObject.offerListingId;var usesMobileFramework=returnedSignupObject.usesMobileFramework;var countryId=returnedSignupObject.countryId;console.log('country id: '+countryId);var pageUrl=window.location.origin
if((countryId==36&&pageUrl.indexOf("dailyrewards")==-1)||(typeof euNations[countryId]!=='undefined'&&pageUrl.indexOf("inboxpounds")==-1))
{countryPopUp(countryId,offer_listing_id,usesMobileFramework);}}
function countryPopUp(countryId,offer_listing_id,usesMobileFramework)
{var siteName="";var country="";if(countryId==36)
{siteName="DailyRewards";country="Canadian";jQuery("#siteLogoPic").attr('src',"/graphics/site/logos/cooper.png");jQuery("#siteLink").attr('href',"http://dailyrewards.com/");}
if(countryId==190||typeof euNations[countryId]!=='undefined')
{siteName="InboxPounds";if(countryId==190){country="UK";}else{country="EU";}
jQuery("#siteLogoPic").attr('src',"/graphics/site/logos/pip.png");jQuery("#siteLink").attr('href',"http://inboxpounds.co.uk/");}
var encourageText="We encourage our "+country+" members to sign up for "+siteName+" to be eligible for more earning opportunities. ";var siteButtonText="Take Me to "+siteName;jQuery("#signupTextContainer").empty();jQuery("#signupTextContainer").append(encourageText);jQuery("#siteButton").empty();jQuery("#siteButton").append(siteButtonText);jQuery(".announcemntCloser").click(function(event){event.preventDefault();jQuery("#signupAnnouncement").hide();});var announcementContainerToClose=jQuery("#announcementContentContainer div:first-child").attr("id");jQuery(document).mouseup(function(e)
{var announcementContainerToClose=jQuery("#announcementContentContainer div:first-child").attr("id");var container=jQuery("#"+announcementContainerToClose);if(!container.is(e.target)&&container.has(e.target).length===0)
{jQuery("#signupAnnouncement").hide();}});jQuery("#signupAnnouncement").delay(50).fadeIn(300);jQuery("#siteSignupLink").click(function(event){event.preventDefault();jQuery("#signupAnnouncement").hide();});jQuery("#siteSignupLinkMobile").click(function(event){event.preventDefault();jQuery("#signupAnnouncement").hide();});}});