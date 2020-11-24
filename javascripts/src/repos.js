const repos = {
  'FunctionalTableData': {},
  'Intro_to_GraphQL_Powered_by_Shopify': {},
  'active_fulfillment': {},
  'active_merchant': {},
  'active_shipping': {},
  'active_utils': {},
  'app_profiler': {},
  'asset_cloud': {},
  'browser_sniffer': {},
  'connect-googleapps': {},
  'dashing': {lang: 'Ruby', icon: '/images/repo-avatars/dashing.gif'},
  'draggable': {icon: '/images/repo-avatars/draggable.png'},
  'dukpt': {},
  'ejson2env': {},
  'embedded-app-example': {},
  'go-lua': {},
  'goluago': {},
  'goreferrer': {},
  'grizzly_ber': {},
  'identity_cache': {},
  'js-buy-sdk': {},
  'kubeaudit': {},
  'liquid': {lang: 'Liquid'},
  'magnet': {},
  'minesweeper': {},
  'money': {},
  'omniauth-shopify-oauth2': {},
  'packwerk': {},
  'polaris-react': {},
  'polaris-icons': {},
  'pyreferrer': {},
  'rails_parallel': {},
  'rotoscope': {lang: 'C'},
  'sarama': {},
  'semian': {},
  'shipit-engine': {},
  'shopify-css-import': {},
  'shopify-fulfillment-integration': {},
  'shopify_api': {},
  'shopify_app': {},
  'shopify_django_app': {},
  'shopify_python_api': {},
  'shopify_theme': {lang: 'Ruby'},
  'skeleton-theme': {lang: 'Liquid'},
  'slate': {icon: '/images/repo-avatars/slate.svg'},
  'splunk-auth-proxy': {},
  'starter-theme': {lang: 'Liquid'},
  'statsd-instrument': {},
  'superdb': {icon: '/images/repo-avatars/super-debugger.gif'},
  'sync_app_demo': {},
  'sysv_mq': {},
  'themekit': {},
  'theme-scripts': {},
  'toxiproxy': {},
  'toxiproxy-ruby': {},
  'tslint-config-shopify': {},
  'turbograft': {},
  'twine': {},
  'verdict': {},
  'voucher': {},
  'vouch4cluster': {},
  'wolverine': {},
  'promise-kotlin': {},
  'promise-swift': {},
  'android-testify': {},
  'kubernetes-deploy': {},
  'quilt': {},
  'graphql-tools-web': {}
};

Object.entries(repos).forEach(repo => {
  const [name, info] = repo;
  fetch(`https://api.github.com/repos/Shopify/${name}`)
    .then(res => res.json())
    .then(res => {
      const lang = info.lang || res.language || ""
      repos[name] = {
        url: res.html_url,
        name: res.name,
        full_name: res.full_name,
        language: lang,
        languageClass: lang.toLowerCase(),
        description: res.description,
        stars: res.stargazers_count ? res.stargazers_count : 0,
        forks: res.forks_count ? res.forks_count : 0,
        avatar: info.icon,
        homepage: res.homepage
      }
    });
});

window.repos = repos

export default {}
