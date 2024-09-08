import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ContactMain from '../components/contact';
import WhatsAppIcon from '../components/common/whatsapp';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact'} />
      <WhatsAppIcon></WhatsAppIcon>
      <ContactMain/>
    </Wrapper>
  );
};

export default index;