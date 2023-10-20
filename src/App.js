import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link} from "react-router-dom";
import Header from './containers/Headers';
import Footer from './containers/Footer';
import Homes from './components/homes/Home';
import OnlineSurveys from './components/services/onlinesurveys/OnlineSurveys';
import DiySurveys from './components/services/diysurveys/DiySurveys';
import GlobalSurvey from './components/services/globalSurvey/GlobalSurvey';
import GlobalQunatitative from './components/services/quantativeSurveys/GlobalQuantitative';
// import EndToEndSurvey from './components/services/endToEndSurveys/EndToEndSurvey';
import EndToEndSurvey from "./components/services/endtoend/EndToEndSurvey";
import In_personal_qual from './components/mirats_qual_services/in_personal/In_personal_qual';
import Digital_qual from './components/mirats_qual_services/digital_qual/Digital_qual';
import Telephonic_qual from './components/mirats_qual_services/telephonic_qual/Telephonic_qual';
import Global_qual from './components/mirats_qual_services/global_qual/Global_qual';
import RecruitmentServices from './components/mirats_special_solutions/recruitment/RecruitmentServices';
import ConsultingSerives from './components/mirats_special_solutions/consulting/ConsultingServices';
import HybriResearchServices from './components/mirats_special_solutions/hybrid_research/HybridResearchServices';
import ProductTestServices from './components/mirats_special_solutions/product_test/ProductTestServices';
import TranscriptionServices from './components/mirats_special_solutions/transcription/TranscriptionServices';
import ConsumerPackagedGoods from './components/industries/consumerPackagedGoods/ConsumerPackagedGoods';
import FinancialServices from './components/industries/financialServices/FinancialServices';
import MarketingResesarch from './components/industries/marketingResearch/MarketingResearch';
import HealthCare from './components/industries/healthCare/HealthCare';
import Consulting from './components/industries/consult/Consulting';
import MediaAndTechnology from './components/industries/mediaAndTechnology/MediaAndtechnology';
import AboutUs from './components/companies/aboutUs/AboutUs';
import Leadership from './components/companies/leadership/Leadership';
import AnupamKumar from './components/companies/leadership/leaders/AnupamKumar';
import GlobalOffices from './components/companies/globalOffices/global/GlobalOffices';
import MacerLucknow from './components/companies/globalOffices/offices/MacerLucknow';
import MiratsLucknow from './components/companies/globalOffices/offices/MiratsLucknow';
import UsMirats from './components/companies/globalOffices/offices/UsMirats';
import AtomosOffice from './components/companies/globalOffices/offices/AtomosOffice';
import PartnershipAndCertificates from './components/companies/partnershipAndCerificates/PartnershipAndCertificates';
import ResearcherEvents from './components/companies/researcherEvents/ResearcherEvents';
import BlogsAndArticles from './components/companies/blogsandArticles/BlogsAndArticles';
import Careers from './components/companies/careers/Careers';
import SupportingAndInvesting from './components/companies/supportingAndInvesting/SupportingAndInvesting';
import CommittedToOurCulture from './components/companies/committedToOutCulture/CommittedToOurCulture';
import FlexibleWorkTime from './components/companies/flexibleWorkTime/FlexibleWorkTime';
import JobSearch from './components/companies/jobSearch/JobSearch';
import B2cAudienceBook from './components/resources/b2cAudienceBook/B2cAudienceBook';
import ConsumerAudienceBook from './components/resources/consumerAudienceBook/ConsumerAudienceBook';
import HealthCareAudienceBook from './components/resources/healthCareAudienceBook/HealthCareAudienceBook';
import QualitySecurityDocs from './components/resources/qualitySecurityDocs/QualitySecurityDocs';
import Esomar from './components/resources/esomar/Esomar';
import Connecting from './components/contacts/connecting/Connecting';
import MakeaCall from './components/contacts/callMake/MakeaCall';
import BlogAndArticle from './components/industries/bloAndArticles/BlogAndArticle';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Homes /> } /> 
        <Route path='/services/onlinesurveys' element={<OnlineSurveys />} />
        <Route path='/services/diysurveys' element={<DiySurveys />} />
        <Route path='/services/globalsurveys' element={<GlobalSurvey />} />
        <Route path='/services/globalqunatitativesurveys' element={<GlobalQunatitative />} />
        <Route path='/services/endtoendsurveys' element={<EndToEndSurvey />} />
        <Route path='/services/inpersonalqual' element={<In_personal_qual />} />
        <Route path='/services/digitalqual' element={<Digital_qual />} />
        <Route path='/services/telephonicqual' element={<Telephonic_qual />} />
        <Route path='/services/globalqual' element={<Global_qual />} />
        <Route path='/services/recruitmentservice' element={<RecruitmentServices />} />
        <Route path='/services/consultingservice' element={<ConsultingSerives />} />
        <Route path='/services/hybridresearchservice' element={<HybriResearchServices />} />
        <Route path='/services/producttestservice' element={<ProductTestServices />} />
        <Route path='/services/transcriptionservice' element={<TranscriptionServices />} />
        <Route path='/industry/consumerpackagedgoods' element={<ConsumerPackagedGoods />} />
        <Route path='/industry/financialservices' element={<FinancialServices />} />
        <Route path='/industry/marketingresearch' element={<MarketingResesarch />} />
        <Route path='/industry/healthcare' element={<HealthCare />} />
        <Route path='/industry/consulting' element={<Consulting />} />
        <Route path='/industry/mediaandtechnology' element={<MediaAndTechnology />} />
        <Route path='/industry/blogsandarticles/:id' element={<BlogAndArticle />} />
        <Route path='/company/aboutus' element={<AboutUs />} />
        <Route path='/company/leadership' element={<Leadership />} />
        <Route path='/company/leaders/AnupamKumar' element={<AnupamKumar />} />
        <Route path='/company/globaloffices' element={<GlobalOffices />} />
        <Route path='/company/globaloffices/Maceroffice' element={<MacerLucknow />} />
        <Route path='/company/globaloffices/Miratsoffice' element={<MiratsLucknow />} />
        <Route path='/company/globaloffices/UsMiratsoffice' element={<UsMirats />} />
        <Route path='/company/globaloffices/Atomosoffice' element={<AtomosOffice />} />
        <Route path='/company/partnershipandcertificates' element={<PartnershipAndCertificates />} />
        <Route path='/company/researcherevents' element={<ResearcherEvents />} />
        <Route path='/company/blogsandarticles' element={<BlogsAndArticles />} />
        <Route path='/company/careers' element={<Careers />} />
        <Route path='/company/supportingandinvesting' element={<SupportingAndInvesting />} />
        <Route path='/company/committedtoourculture' element={<CommittedToOurCulture />} />
        <Route path='/company/flexibilityworktime' element={<FlexibleWorkTime />} />
        <Route path='/company/jobsearch' element={<JobSearch />} />
        <Route path='/resources/b2caudiencebook' element={<B2cAudienceBook />} /> 
        <Route path='/resources/consumeraudiencebook' element={<ConsumerAudienceBook />} />
        <Route path='/resources/healthcareaudiencebook' element={<HealthCareAudienceBook />} />
        <Route path='/resources/qualityandsecuritydocs' element={<QualitySecurityDocs />} />
        <Route path='/resources/esomar' element={<Esomar />} />
        <Route path='/contacts/connecting' element={<Connecting />} />
        <Route path='/contacts/MakeaCall' element={<MakeaCall />} />
      </Routes >
      <Footer />
    </div>
  );
}

export default App;
