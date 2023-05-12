const containers = {
    account_transfer: 'account_transfer',
    deposit: 'deposit',
    payment_agent: 'payment_agent',
    payment_agent_transfer: 'payment_agent_transfer',
    withdraw: 'withdraw',
};

const map_action = {
    withdraw: 'payment_withdraw',
    payment_agent: 'payment_agent_withdraw',
};

const icon_payment_methods = {
    Alipay: ['alipay'],
    Bank: [
        'bank',
        'bankdeposit',
        'banks',
        'banktransfer',
        'bankwire',
        'bankwiretransfer',
        'localbankwire',
        'localbank',
        'localbanks',
        'localbanktransfer',
    ],
    Bankbri: ['bri', 'bankbri'],
    Bca: ['bca', 'grupbca'],
    Bch: ['bch'],
    Bni: ['bni'],
    Bitcoin: ['bitcoin', 'btc'],
    Card: ['card', 'cards', 'visa', 'mastercard'],
    Cimbniaga: ['cimbniaga'],
    Crypto: ['crypto', 'cryptos', 'cryptocurrencies', 'cryptocurrency', 'weacceptcrypto'],
    Dai: ['dai'],
    Diamondbank: ['diamondbank'],
    Eth: ['eth', 'ethd', 'ethereum'],
    Ewallet: ['ewallet', 'ewallets', 'ewalletpayment', 'skrill'],
    Firstbank: ['firstbank'],
    Gtbank: ['gtbank'],
    Icbc: ['icbc'],
    Libertyreserve: ['libertyreserve'],
    LiteCoin: ['ltc', 'litecoin'],
    Mandiri: ['mandiri'],
    Mandirisyariah: ['mandirisyariah'],
    Moneygram: ['moneygram'],
    Paypal: ['paypal'],
    PerfectMoney: ['perfectmoneyandwebmoney', 'perfectmoney'],
    Permatabank: ['permatabank'],
    Tether: ['tether'],
    Verve: ['verve'],
    WebMoney: ['perfectmoneyandwebmoney', 'webmoney'],
    Wechatpay: ['wechatpay'],
    Zenithbank: ['zenithbank'],
};

const payment_methods = {
    AbokiFX: ['AbokiFX', 'A BOKI FX'],
    'ABSA Bank': [
        'Absa',
        'ABSA',
        'ABSA Bank',
        'ABSABank',
        'ABSABANK',
        'Absabank',
        'ABSA Bank Transfer',
        'ABSA Cash Send',
        'Absa fund transfer and orange money services',
        'ABSA GHANA LIMITED',
        'Direct deposit FNB and ABSA',
    ],
    'Access bank': ['Access bank', 'Access Bank', 'Accessbank', 'AccessBank', 'ACCESS BANK', 'Acess Bank'],
    'Access forex': ['Access Forex', 'ACCESS FOREX', 'Access forex'],
    'Afriland First Bank': ['Afriland First Bank', 'AFRILAND FIRST BANK'],
    'Airtel Mobile money': [
        'Airtel Mobile money',
        'airtel',
        'Airtel',
        'AIRTEL MOBILE MONEY',
        'airtel money',
        'Airtel money',
        'Airtelmoney',
        'Airtel Money',
        'AirtelMoney',
        'AIRTELMONEY',
        'AIRTEL MONEY',
        'Airtel Tigo',
        'AirtelTigo cash',
        'all mobile money',
    ],
    Airtm: ['airtm', 'Airtm'],
    AlfalahBank: ['AlfalahBank', 'bank alfalfa', 'Alflah Bank'],
    'All banks': [
        'All banks',
        'All local banks',
        'All local Banks',
        'All local banks ZWL',
        'All Local Bank transfer',
        'bank',
        'Bank',
        'BANK',
        'banks',
        'Banks',
        'local banks',
        'Local banks',
        'Local Banks',
        'Pakistani Local All banks',
        'Local Indian banks',
        'LocalBanks',
    ],
    Astropay: ['astropay', 'Astropay', 'Astro Pay'],
    'ATM transfer': [
        'ATM',
        'ATMDeposits',
        'ATMdeposit',
        'ATM transfer',
        'ATM Transfer',
        'BanktransferATM',
        'FNB ATM deposit',
    ],
    AzamPesa: ['AzamPesa', 'Azampesa'],
    'Banco Bradesco': ['Banco Bradesco', 'Bradesco'],
    'Banco de Pichincha': ['Banco de Pichincha', 'BANCO DE PICHINCHA', 'Pichincha'],
    'Banco de Produbanco': ['Banco de Produbanco', 'BANCO DE PRODUBANCO'],
    'Banco del Pacifico': ['Banco del Pacifico', 'BANCO DE PACIFICO', 'Pacifico'],
    'Banco Internacional': ['Banco Internacional', 'BANCO INTERNACIONAL'],
    'Banco Internacional de Moçambique (BIM)': ['Banco Internacional de Moçambique (BIM)', 'Bim', 'Transferencia Bim'],
    'Bancobu Bank eNoti': ['Bancobu Bank eNoti', 'Bancobu e-noti'],
    'Bank AL Habib': ['Bank AL Habib', 'bank al habib', 'Bank Alhabib'],
    'Bank Negara Indonesia (BNI)': ['Bank Negara Indonesia (BNI)', 'BNI', 'BankBNI'],
    'Bank Of Ceylon (BOC)': ['Bank Of Ceylon (BOC)', 'Bankofceylon', 'Boc Peoples Bank'],
    'Bank Rakyat Indonesia (BRI)': ['Bank Rakyat Indonesia (BRI)', 'BankBri', 'BankBRI', 'BRI', 'BRI dan Ewallet'],
    'Bank transfer': [
        'All Local Bank payment Accept',
        'All local bank payments',
        'All Local Bank transfer',
        'bank',
        'Bank',
        'BANK',
        'Banks BHIMUP BTC Ewallet GooglePay LocalBank Paypal Paytm Perfect Money PhonePhe',
        'Bank and E-wallet',
        'bank deposit',
        'Bank deposit',
        'Bankdeposit',
        'Bank Deposit',
        'Bank deposits',
        'bank ewallet',
        'bank payment',
        'banks',
        'Banks',
        'Bank to Bank account transfer',
        'bank transfer',
        'Bank transfer',
        'Banktransfer',
        'Bank Transfer',
        'BankTransfer',
        'BANK TRANSFER',
        'BANKTRANSFER',
        'bank transfer and all form of E-payments',
        'Bank Transfer and all Forms of E-payments',
        'BanktransferATM',
        'bank transfers',
        'Bank transfers',
        'Bank Transfers',
        'Ban transfer',
        'Depositos direto em conta',
        'Direct deposit FNB and ABSA',
        'E-wallet Bank transfer',
        'Internet Banking',
        'Internet transfer',
        'Internet Transfer',
        'LocalBank',
        'local banks',
        'Local banks',
        'Local Banks',
        'Local bank transfer',
        'Local bank Transfers',
        'Local deposits',
        'Local deposit',
        'local deposits',
        'BANKTRANSFERS',
        'Bank Deposits',
        'Bank deposit and transfer',
        'Bank transfer and e-wallets',
        'BankDeposit',
        'Fiat',
        'LOCALBANK',
        'OnlineTransfer',
        'ZWbanktransfers',
        'localbanktransfer',
        'Bank transfer Bank wire',
    ],
    'Bank wire': [
        'bank',
        'Bank',
        'BANK',
        'bank payment',
        'banks',
        'Banks',
        'bank wire',
        'bankwire',
        'Bank wire',
        'Bankwire',
        'Bank Wire',
        'BankWire',
        'BANKWIRE',
        'Bank wire and e-wallets',
        'Bank wire and E-wallets',
        'Bank wires',
        'Bankwires',
        'bank wires and e-wallet',
        'Bank wires and e-wallets',
        'BankWire transfer',
        'E-wallets and bank wires',
        'local bank wire',
        'LocalBankWire',
        'LocalBankwire',
        'Wire Bank Transfer',
        'WIRE TRANSFER',
        'Bank Wire transfer',
        'Fiat',
        'OnlineTransfer',
        'Bank transfer Bank wire',
    ],
    BankABC: ['BankABC', 'BANCABC BANK'],
    'Bank BTN': ['Bank BTN', 'BTN'],
    'Bank of the Philippine Islands (BPI)': ['Bank of the Philippine Islands (BPI)', 'BPI'],
    'BCA bank': ['BCA bank', 'BCA', 'BankBCA', 'bca'],
    'BDO Unibank': ['BDO Unibank', 'BDO'],
    BHIM: ['BHIM', 'Bhim', 'Banks BHIMUP BTC Ewallet GooglePay LocalBank Paypal Paytm Perfect Money PhonePhe'],
    'BMCE Bank': ['BMCE Bank', 'Bmce Bank'],
    'CABS Bank': ['CABS Bank', 'Cabs bank', 'CABS transfer'],
    Card: [
        'Card',
        'card',
        'cards',
        'Cards',
        'Credit card',
        'Debit Card',
        'Mastercard',
        'MasterCard',
        'visa',
        'Visa',
        'VISA',
        'Visa card',
        'Bank cards',
        'Carteiras Electronicas',
        'Fiat',
        'Master card',
    ],
    Cash: [
        'cash',
        'Cash',
        'Cash deposit',
        'Cash deposits',
        'Cash in USD or Local',
        'electronic transfers and cash deposits',
        'FNB cash deposit',
        'physical local and foreign bank notes',
        'USD',
        'USD cash',
        'Cash Deposit',
        'Fiat',
        'INR',
        'USDCash',
        'Zwcash',
    ],
    'Cash send ABSA bank': [
        'Cash send ABSA bank',
        'ABSA Cash Send',
        'Cashsend',
        'Cash Send',
        'CashSend',
        'cash send Absa',
        'Cash send Absa bank',
    ],
    'Chipper Cash': ['Chipper Cash', 'Chipper', 'Chippercash', 'Chipperchash'],
    'CIH Bank': ['CIH Bank', 'Cih Bank'],
    CIMB: ['CIMB', 'CIMBNIAGA', 'NIAGA'],
    'City Hopper': ['City hopper', 'City Hopper'],
    'Co-operative Bank of Kenya': ['Co-operative Bank of Kenya', 'cooperativebank'],
    'Commercial Bank': ['Commercial Bank', 'Commercialbank'],
    'CRDB Bank': ['CRDB Bank', 'CRDBBANK'],
    Crypto: [
        'Banks BHIMUP BTC Ewallet GooglePay LocalBank Paypal Paytm Perfect Money PhonePhe',
        'bitcoin',
        'Bitcoin',
        'BITCOIN',
        'bitcoins',
        'Bitcoins',
        'btc',
        'BTC',
        'btc smega',
        'Cripto',
        'crypto',
        'Crypto',
        'Cyptocurrency',
        'cryptocurrencies',
        'Cryptocurrencies',
        'Crypto Currencies',
        'CRYPTOCURRENCIES',
        'cryptocurrency',
        'Cryptocurrency',
        'CRYPTOCURRENCY',
        'Cryptos',
        'ETH',
        'eUSDT',
        'EUSDT',
        'LTC',
        'Tether',
        'TRON',
        'USDC',
        'USDT',
        'UST',
        'We accept Crypto',
        'BCH',
        'Btc',
        'Criptomoedas',
        'Crypto Payment',
        'Crypto transfer',
        'CryptoTransfer',
        'E-Wallets and Crypto',
        'E-wallets and Crypto',
        'Ethereum',
        'Etherium',
        'Litecoin',
        'Skrill Neteller Crypto',
        'SkrillCrypto',
        'Tether ERC20',
        'Tether Omni',
        'Thether',
        'Usdt',
        'cryptos',
        'ethereum',
        'litecoin',
    ],
    'Diamond Bank': ['Diamond bank', 'Diamond Bank', 'DiamondBank'],
    'E-Mola': ['E-Mola', 'E-mola', 'Emola'],
    'E-money': ['E-money', 'e money'],
    'E-payment': [
        'E-payment',
        'all form of E-payments',
        'All form of E-payments',
        'all forms of E-payments',
        'and all other forms of Epayment',
        'bank transfer and all form of E-payments',
        'Bank Transfer and all Forms of E-payments',
        'E-payments',
        'Epayments',
        'All forms of E-Payments',
        'DigitalPayment',
        'OnlineTransfer',
        'all forms of E-Payment',
    ],
    'E-transfer': ['E-transfer', 'electronic transfers and cash deposits', 'E-Transfers', 'OnlineTransfer'],
    'E-wallet': [
        'Banks BHIMUP BTC Ewallet GooglePay LocalBank Paypal Paytm Perfect Money PhonePhe',
        'Bank and E-wallet',
        'bank ewallet',
        'Bank wire and e-wallets',
        'Bank wire and E-wallets',
        'bank wires and e-wallet',
        'Bank wires and e-wallets',
        'Digital Wallets',
        'electronic wallets',
        'e-wallers',
        'e-wallet',
        'ewallet',
        'eWallet',
        'E-wallet',
        'Ewallet',
        'EWALLET',
        'E-wallet Bank transfer',
        'E wallet FNB',
        'E-wallet payment',
        'Ewallet payment',
        'e-wallets',
        'ewallets',
        'e-Wallets',
        'e-WALLETS',
        'E- wallets',
        'E-wallets',
        'Ewallets',
        'E-Wallets',
        'E-wallets and bank wires',
        'fnb ewallet',
        'MY WALLET',
        'wallet',
        'Bank transfer and e-wallets',
        'E-Wallets and Crypto',
        'E-wallets and Crypto',
        'E-Wallet',
        'EWallets',
        'Fiat',
        'OnlineTransfer',
        'ewalllets',
        'ewalltets',
        'local bank wallets and Orange money',
    ],
    Easypaisa: ['easypaisa', 'Easy paisa', 'Easypaisa', 'Easy Paisa', 'EasyPaisaTransfer'],
    Ecobank: ['Ecobank', 'Eco Bank', 'ECO BANK', 'Eco bank Transfers'],
    EcoCash: [
        'Eco cash',
        'Ecocash',
        'EcoCash',
        'ECOCASH',
        'Ecocash FCA',
        'Ecocash method',
        'ECOCASH WALLET',
        'Ecocash ZWL',
        'EcocashMobileMoney',
        'Zwecocash',
    ],
    'Electronic Funds Transfer (EFT)': ['Electronic Funds Transfer (EFT)', 'EFT'],
    'Equity Bank': ['Equity bank', 'Equity Bank', 'equitybankmoneytransfer'],
    'EU Mobile Money': ['EU Mobile Money', 'all mobile money', 'EU MONEY'],
    EzyPesa: ['EzyPesa', 'Ezypesa', 'Ezzy pesa', 'Ezzy Pesa', 'EzzyPesa'],
    FasaPay: ['fasapay', 'Fasa pay', 'FasaPay'],
    'Fast Payment': ['Fast payment', 'Fast Payment'],
    'Faysal Bank': ['Faysal Bank', 'FaysalBank'],
    'FBC Bank': ['FBC Bank', 'FBC BANK'],
    'Fidelity Bank': ['Fidelity Bank', 'fidelitybank'],
    Finbank: ['Finbank', 'Fin bank', 'FinBank'],
    'First Bank of Nigeria': [
        'First Bank of Nigeria',
        'First bank',
        'First Bank',
        'FirstBank',
        'FIRST BANK',
        'Firstbank',
    ],
    'First City Monument Bank (FCMB)': ['First City Monument Bank (FCMB)', 'FCMB', 'fcmb'],
    'First MicroFinanceBank (FMFB)': ['First MicroFinanceBank (FMFB)', 'FMFB'],
    'First National Bank (FNB)': [
        'First National Bank (FNB)',
        'Direct deposit FNB and ABSA',
        'E wallet FNB',
        'First National Bank',
        'fnb',
        'FNB',
        'FNB ATM deposit',
        'Fnbbank',
        'FNB Bank',
        'FNBB Bank Transfer',
        'FNB cash deposit',
        'fnb ewallet',
        'FNB First National Bank',
        'FNB pay2cell',
        'FNB pay to cell',
        'FNB pay to sell',
        'Pay to cell FNB',
        'FNB bank transfer',
        'FNBB',
        'FNBBank',
        'FirNationalBank',
        'First National Bank of Botswana',
        'Firstnationalbank',
        'Fnb',
    ],
    Gmoney: ['Gmoney', 'GMONEY'],
    'Google Pay': [
        'Google Pay',
        'Banks BHIMUP BTC Ewallet GooglePay LocalBank Paypal Paytm Perfect Money PhonePhe',
        'Google pay',
        'gpay',
        'Gpay',
        'GPay',
    ],
    'Grup BCA': ['Grup BCA', 'GrupBCA'],
    'GT bank': [
        'GT bank',
        'Gtb',
        'GTB',
        'Gt Bank',
        'GT Bank',
        'GTBank',
        'GT BANK',
        'Gtbank',
        'Guarantee Trust Bank',
        'GuarantyTrustBank',
    ],
    Halopesa: ['halopesa', 'Halo pesa', 'Halopesa', 'Halo Pesa', 'HaloPesa', 'HALOPESA'],
    'Hatton National Bank': ['Hatton National Bank', 'HattonNationalBank'],
    HBL: ['HBL', 'HBLMFB', 'KONNET HBL'],
    Help2Pay: ['Help2Pay', 'help2pay'],
    'HNB Bank': ['HNB Bank', 'HNB'],
    'IMPS Transfer': ['imps', 'Imps', 'IMPS', 'IMPS Transfer'],
    'ING Bank': ['ING Bank', 'ING'],
    Innbucks: ['Innbucks', 'INNBUCKS'],
    'Instant Money': [
        'Instant Money',
        'InstantMoney',
        'Instant money stambic bank',
        'Instant money stanbic',
        'Instant money',
    ],
    'Inter Bank Fund Transfer': ['Inter Bank Fund Transfer', 'InterBankfundtransfer', 'Interbank Transfer'],
    'Itau Bank': ['Itau Bank', 'Itau'],
    IZI: ['IZI', 'Izzy'],
    JazzCash: ['JazzCash', 'jazzcash', 'Jazz cash', 'Jazzcash', 'Jazz-Cash', 'JazzCashTransfer'],
    JENIUS: ['JENIUS', 'Jenius'],
    Jeton: ['Jeton', 'jeton', 'JetonWallet'],
    'Key Stone Bank': ['Key Stone Bank', 'Keystone'],
    'Kuda Bank': [
        'Kuda Bank',
        'KUDA BANK',
        'Kuda MFB',
        'KudaMFB',
        'KUDA MICROFINANCE BANK 2014563937',
        'Kuda Microfinance',
        'KUDA',
    ],
    'Luno Wallet': ['Luno Wallet', 'Luno', 'Luno crypto wallet', 'Luno e-wallet', 'Luno ewallet', 'luno'],
    'Mandiri Bank': ['Mandiri Bank', 'Mandiri', 'MANDIRI', 'MandiriSyariah', 'BankMandiri'],
    'Meezan Bank': ['Meezan Bank', 'MeezanBank'],
    'Millenium Bim Visa': ['Millenium Bim Visa', 'Millenium Bim'],
    MIX: ['mix', 'Mix', 'MIX', 'Mixed'],
    'Mobile money': [
        'all mobile money',
        'mobile banking',
        'Mobile banking',
        'Mobile money',
        'Mobile Money',
        'MobileMoney',
        'Mobile money MTN',
        'Mobile Money transfer',
        'MOBILE MONEY TRANSFER',
        'Mobile money transfers',
        'Mobilemoneyoption',
        'OnlineTransfer',
    ],
    'Mojo Mula': ['Mojo money', 'Mojo Mula', 'MOJO MULA', 'MoMo pay', 'Mojo Moolah'],
    MoMo: ['MoMo', 'MOMO', 'MoMo pay', 'MTN MOMO', 'MTNMOMO'],
    MoneyGram: ['Moneygram', 'Money Gram', 'MoneyGram', 'Money grame'],
    'M-PESA': [
        'AbesafaricomMpesa Transfers',
        'mpesa',
        'M pesa',
        'M-pesa',
        'Mpesa',
        'M Pesa',
        'M-Pesa',
        'MPesa',
        'M PESA',
        'M-PESA',
        'MPESA',
        'M-Pesa Tigo-Pesa T-Pesa',
        'Pesa',
        'safaricom mpesa',
        'MPESA 0710393947 Albert Kyalo',
        'VodacomMpesa',
    ],
    'MTN MOMO': [
        'all mobile money',
        'Mobile money MTN',
        'MoMo',
        'MOMO',
        'MTN',
        'MTN mobile money',
        'MTN Mobile money',
        'MTN Mobile Money',
        'MTN MOBILE MONEY',
        'MTNMOBILEMONEY',
        'MTN MOMO',
        'MTNMOMO',
        'MTN MONEY',
    ],
    'Mukuru money transfers': ['Mukuru', 'Mukuru money transfers', 'MukuruMoneyTransfer', 'USDMukurutransfer'],
    'MyZaka Mascom Money': [
        'MyZaka Mascom Money',
        'mascom',
        'mascom myZaka',
        'Mascom MyZaka',
        'myzaka',
        'My zaka',
        'Myzaka',
        'MyZaka',
        'My zaka mascom money',
        'my Zaka',
        'myzaaka',
    ],
    Neft: ['neft', 'Neft', 'NEFT'],
    Nequi: ['Nequi', 'Nequi o Daviplata al 300 6839026'],
    Neteller: ['neTeller', 'Neteller', 'NETELLER', 'NETelle', 'Skrill Neteller Crypto', 'neteller', 'netteller'],
    'Nigeria local bank': ['Nigeria Local', 'Nigeria local bank', 'NIGERIA LOCAL BANK'],
    'NMB Bank': ['NMB Bank', 'NATIONALMICROFINANCEBANK', 'Nmb bank'],
    'One Money': ['OM', 'Onemoney', 'One Money', 'One money service', 'OneMoney', 'OneMoneyMobileMoney'],
    Opay: ['Opay', 'OPAY'],
    'Orange Money Transfer': [
        'Absa fund transfer and orange money services',
        'Orange Cameroon',
        'orange money',
        'orangemoney',
        'Orange money',
        'Orangemoney',
        'Orange Money',
        'OrangeMoney',
        'ORANGE MONEY',
        'Orange Money Transfer',
        'local bank wallets and Orange money',
    ],
    PalmPay: ['PalmPay', 'PALMPAY'],
    'Pay safe Card': ['paysafecard', 'Pay safe Card'],
    Pay2Cell: [
        'FNB pay2cell',
        'FNB pay to cell',
        'FNB pay to sell',
        'Pay2cell',
        'Pay2Cell',
        'PAY2CELL',
        'pay to cell',
        'Pay to cell',
        'Paytocell',
        'Pay to Cell',
        'Pay to cell FNB',
        'PayToCell',
        'pay2cell',
    ],
    'Payment Checks': ['Payment checks', 'Payment Checks'],
    PayPal: [
        'Banks BHIMUP BTC Ewallet GooglePay LocalBank Paypal Paytm Perfect Money PhonePhe',
        'Paypal',
        'PayPal',
        'PAYPAL',
        'paypal',
    ],
    PayTM: ['Banks BHIMUP BTC Ewallet GooglePay LocalBank Paypal Paytm Perfect Money PhonePhe', 'Paytm', 'PayTM'],
    'Perfect Money': [
        'Banks BHIMUP BTC Ewallet GooglePay LocalBank Paypal Paytm Perfect Money PhonePhe',
        'perfect money',
        'perfectmoney',
        'Perfect money',
        'Perfectmoney',
        'Perfect Money',
        'PerfectMoney',
        'PERFECT MONEY',
        'Perfect Money and Webmoney',
        'PM',
        'PERFECTMONEY',
        'PERFECT',
    ],
    'Permata Bank': ['Permata Bank', 'PermataBank', 'PERMATA'],
    PhonePhe: [
        'PhonePhe',
        'Banks BHIMUP BTC Ewallet GooglePay LocalBank Paypal Paytm Perfect Money PhonePhe',
        'Phonepay',
        'phonepe',
        'Phonepe',
        'PhonePe',
        'Phone pay',
        'PhonePay',
    ],
    Pix: ['Pix', 'PIX'],
    'Polaris Bank': ['Polaris Bank', 'Polaris'],
    'Ponto 24': ['Conta movel', 'Conta Movel', 'ContamovelBCI', 'Ponto 24', 'Ponto24'],
    'Pos deposit': ['Pos', 'POS', 'Pos deposit'],
    'Postal transfer': ['Postal transfer', 'Egyptian postal transfers'],
    RIA: ['Ria', 'RIA'],
    'RTGS Transfers': ['RTGS Transfers', 'rtgs', 'RTGS', 'Rtgs bank transfer', 'RTGS transfers', 'Rtgs'],
    Safaricom: ['Safaricom', 'AbesafaricomMpesa Transfers', 'AbeSafaricomMpesaTransfers', 'safaricom mpesa'],
    'Sama Money': ['Sama Money', 'Sama money'],
    ShopeePay: ['ShopeePay', 'SHOPEEPAY'],
    Skrill: [
        'Skrill',
        'Skill',
        'Skril',
        'skrill',
        'SKRILL',
        'skrillpayments',
        'Skrll',
        'SkrillCrypto',
        'Skrill Neteller Crypto',
    ],
    Smega: ['btc smega', 'smega', 'Smega'],
    'Standard Bank Namibia': ['Standard Bank Namibia', 'Standard Bank', 'StandardBank'],
    'Stanbic Bank': [
        'Instant money stambic bank',
        'Instant money stanbic',
        'stanbic',
        'Stanbic',
        'Stanbic Bank',
        'StanbicBank',
        'Stanbic Bank Transfer',
        'Stanbic Money Transfer',
        'Standbic',
        'Stanbic IBTC',
        'Stanbic bank',
    ],
    'Standard Charted Bank': [
        'STANCHART',
        'Standard Charted Bank',
        'Standard chartered',
        'Standard chartered bank',
        'Standard Chartered Bank Transfer',
        'Standard Chatterd Bank',
    ],
    'Steward remit': ['Steward remit', 'Steward Remmitt'],
    'T-pesa': ['M-Pesa Tigo-Pesa T-Pesa', 'Pesa', 'T-pesa', 'Tpesa', 'T PESA', 'TTCLpesa'],
    'Tigo Cash': ['Tigo', 'Tigo Cash', 'AirtelTigo cash'],
    'Tigo Mobile Money': [
        'Tigo Mobile Money',
        'Airtel Tigo',
        'all mobile money',
        'Tigo',
        'TIGO MOBILE MONEY',
        'TIGOMOBILEMONEY',
        'AirtelTigo cash',
    ],
    'Tigo Pesa': [
        'M-Pesa Tigo-Pesa T-Pesa',
        'Pesa',
        'Tigo',
        'tigopesa',
        'Tigo pesa',
        'Tigopesa',
        'Tigo Pesa',
        'TigoPesa',
        'TIGO PESA',
        'TTCLpesa',
        'TIGOPESA',
    ],
    'Transferencia bancaria': [
        'Transferencia bancaria',
        'Transferencia Eletronica TED',
        'Transferencias bancarias',
        'Ted',
        'Transferencia Bancaria',
    ],
    'UBA Bank': ['UBA', 'UBA Bank', 'UBA BANK'],
    'Union Bank': ['Union Bank', 'Unionbank', 'Union'],
    'United Bank Limited (UBL)': ['United Bank Limited (UBL)', 'UBL Bank'],
    UPI: [
        'All UPI Transfer',
        'Banks BHIMUP BTC Ewallet GooglePay LocalBank Paypal Paytm Perfect Money PhonePhe',
        'upi',
        'UPI',
        'UPI transfer',
        'AmazonUPI',
        'PaytmUPI',
        'Upi',
    ],
    'USSD code transfer': [
        'USSD code transfer',
        'Or USSD transfer from all Nigeria banks',
        'USSD Code',
        'USSD CODE',
        'Ussd code Transfer from all Nigerian banks',
        'Ussd transfer',
        'USSD transfer',
        'USSD Transfer',
        'ussd transfer',
    ],
    Vodacom: ['Vodacom', 'VodacomMpesa'],
    'Vodafone Cash': ['Vodafon Cash Methods', 'Vodafone cash', 'Vodafone Cash', 'VODAFONE CASH', 'VODAFONECASH'],
    Webmoney: ['Perfect Money and Webmoney', 'Webmoney', 'WebMoney', 'Web Money', 'Web money'],
    'WeChat Pay': ['WeChat Pay', 'WeChatPay'],
    'Wema Bank': ['Wema Bank', 'Wema'],
    WesternUnion: ['Western union', 'Western Union', 'WesternUnion', 'westernunion'],
    Wise: ['Wise', 'transferwise'],
    'World Remit': ['World remit', 'World Remit', 'CoinbaseworldRemit'],
    'Zanaco bank': ['ZANACO', 'Zanaco bank'],
    'Zenith bank': ['Zenith bank', 'Zenithbank', 'Zenith Bank', 'ZenithBank', 'ZENITH BANK', 'Zenith', 'zenithbank'],
    Zipit: ['Zipit', 'ZIPIT', 'ZIPIT bank transfers'],
};

export default { containers, map_action, icon_payment_methods, payment_methods };