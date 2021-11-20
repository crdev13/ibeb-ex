import '../styles/global.css'
import Layout from '../components/layout/Layout'

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout title="IBEB">
      <Component {...pageProps} />
      {/* <script src="/js/jquery-1.11.1.min.js"></script>
      <script src="/js/plugins.js"></script>
      <script src="/js/app.js"></script> */}
    </Layout>
  );
}

export default MyApp;