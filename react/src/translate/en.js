// TODO: clean old placeholders

export const _lang = {
  'EN': {
    'IMPORT_KEY': {
      'IMPORT': 'Import',
      'IMPORT_KEY': 'Import key',
      'TWO_FORMS_BELOW_P1': 'Two forms below allow you to import either',
      'TWO_FORMS_BELOW_P2': 'passphrase (seed) or',
      'TWO_FORMS_BELOW_P3': 'key',
      'PASSPHRASE': 'Passphrase / seed',
      'NOTICE': 'Notice',
      'NOTICE_DESC': 'importing a passphrase will trigger a full wallet rescan',
      'KMD_RESCAN_WARNING_TIME': 'This process can take hours to rescan the whole blockchain',
      'SHOW_ADDRESS_AND_WIF': 'Show address and WIF',
      'ADDRESS': 'Address',
      'OR': 'or',
      'TRIGGER_RESCAN': 'Trigger rescan',
      'RESCAN_TIP': 'Use this option if you want to trigger rescan after WIF is imported. If you have several addresses that you want to import add them one by one and toggle this option on the last address import.',
      'WIF_KEY': 'WIF key',
      'IMPORT_AND_RESCAN': 'Import and rescan',
    },
    'CLAIM_INTEREST': {
      'REQ_P1': 'Requirements to accrue interest',
      'REQ_P2': 'spend transaction was made at least 1 hour ago, locktime field is set and amount is greater than',
      'CLAIM_INTEREST': 'Claim @template@ interest',
      'LOADING': 'Loading interest data',
      'NO_DATA': 'No data',
      'TIP': 'Tip',
      'TIP_DESC': 'don\'t attempt to claim interest smaller than 0.01 KMD. A fee you have to pay for transaction will be more or equal to the interest amount.',
    },
    'ABOUT': {
      'AGAMA_WALLET': 'Agama Wallet',
      'ABOUT_AGAMA': 'About Agama',
      'AGAMA_MODES': 'Agama Wallet is a desktop app that you can use to manage multiple cryptocurrency wallets. ' +
                     'When you set up a wallet, you can configure it to operate in one of the following modes:',
      'NATIVE_MODE_DESC': 'Only available for a few currencies. Like \'Full Mode\' but provides advanced functionality.',
      'AGAMA_CAPABILITIES': 'Agama includes the following capabilities:',
      'BARTER_DEX_DESC': 'Easily exchange cryptocurrencies via a shapeshift-like service.',
      'AGAMA_NOTE': 'Note: Agama Wallet is still in development. ' +
                    'It is safe to use, but you should make proper backups. ' +
                    'We do not recommend using it as the primarily wallet for your cryptocurrencies.',
      'TESTERS': 'Testers',
      'TESTERS_P1': 'You can help us test Agama. Just',
      'TESTERS_P2': 'download and install the latest release',
      'TESTERS_P3': 'Then, report any bugs you encounter to our developers on the',
      'TESTERS_P4': 'Your help is greatly appreciated!',
      'AGAMA_DAPPS': 'Agama also supports the following desktop apps:',
      'JUMBLR_DESC': 'A decentralized Bitcoin blockchain tumbler for privacy and lower fees.',
      'BARTER_DEX_DESC_ALT': 'A decentralized coin exchange.',
      'CHANNEL': 'channel',
      'GET_AN_INVITE': 'Get an invite',
      'GET_AN_INVITE_P2': 'to our slack if you\'re not registered yet'
    },
    'API': {
      'CONN_ERROR': 'Connection error',
      'KMD_PASSIVE_ERROR': 'Please make sure to run komodod manually',
      'ERROR_SM': 'error',
      'ADDRESS_ALREADY_REG': 'Address already registered',
      'COULDNT_COPY_ADDRESS': 'Couldn\'t copy address to clipboard',
      'COULDNT_CREATE_SEED': 'Couldn\'t create new wallet seed',
      'WALLETDAT_MISMATCH': 'Your wallet.dat is not matching the blockchain. Please restart the wallet with -reindex param.',
      'PEER_ADDED': 'Peer is added',
      'ADDNODE_ALREADY_PENDING': 'Addnode connection was already pending',
      'PEER_ALREADY_CONN': 'Peer was already connected',
      'ADDNODE_NEEDS_COIN': 'Addnode needs active coin',
      'PRIVKEY_IN_WALLET': 'Privkey already in wallet',
      'ILLEGAL_PRIVKEY': 'Illegal privkey',
      'NO_ACTIVE_COIN': 'No active coin',
    },
    'INDEX': {
      'SPV_SERVER_IP': 'Server IP',
      'SPV_SERVER_PORT': 'Server Port',
      'SPV_SERVER_CON_TYPE': 'Connection type',
      'COIND_DOWN_MODAL_ERROR': ' debug.log is empty. Looks like daemon didn\'t start properly. Please retry.',
      'SPV_MODE': 'SPV Mode',
      'PROGRESS_RESCANNING_BLOCKS': '(rescanning blocks)',
      'BLOCKS': 'Blocks',
      'PLEASE_WAIT_UNTIL_RESCAN_FINISHED': 'Please wait until rescan process is finished',
      'VERIFYING_BLOCKS': 'Verifying blocks',
      'ALL': 'All',
      'NATIVE_ONLY_MODE': 'Native only mode',
      'NORMAL_MODE': 'Normal mode',
      'T_FUNDS': 'Transparent funds',
      'HASH': 'Hash',
      'SYNC_IN_PROGRESS': 'Synchronization is in progress',
      'UI_UPDATE_DOWNLOADED': 'UI update downloaded. Verifying',
      'UI_UPDATED': 'UI is updated!',
      'UI_UPDATE_ERROR': 'Error while verifying update file! Please retry again.',
      'CHECKING_UI_UPDATE': 'Checking for UI update',
      'NEW_UI_UPDATE': 'New UI update available',
      'YOU_HAVE_LATEST_UI': 'You have the lastest UI version',
      'DOWNLOADING_UI_UPDATE': 'Downloading UI update',
      'LAST_50_LINES': 'last 50 lines',
      'IS_DOWN': 'is down',
      'REINDEX': 'reindex',
      'RESCAN': 'rescan',
      'BACKGROUND_PROCESS': 'background process',
      'NONE': 'none',
      'DAEMON_PARAM': 'Daemon param',
      'FILTER_BY_ADDRESS': 'Filter by address',
      'RESCANNING_LAST_BLOCKS': 'Rescanning last blocks...',
      'NO_DATA_AVAILABLE': 'No data available',
      'LOADING': 'Loading',
      'ACTIVATING_SM': 'activating',
      'DL_BLOCKS': 'downloading blocks',
      'RESCAN_SM': 'rescanning blocks',
      'REINDEX': 'reindexing blocks from disk',
      'BLOCKS_SM': 'blocks',
      'LOADING_BLOCKS': 'Loading data please wait...',
      'WEAK_SEED': 'Weak seed!',
      'YOUR_SEED_MUST_CONTAIN': 'Your seed must contain:',
      'YOUR_SEED_MUST_CONTAIN1': '- at least 1 upper case letter',
      'YOUR_SEED_MUST_CONTAIN2': '- at least 1 digit',
      'YOUR_SEED_MUST_CONTAIN3': '- at least 1 special character',
      'YOUR_SEED_MUST_CONTAIN4': '- minimum 10 characters long',
      'EXECUTE': 'Execute',
      'TYPE_CLI_CMD': 'Type in CLI compatible cmd',
      'COIN': 'Coin',
      'UPDATE': 'Update',
      'UI_UPDATE': 'UI update',
      'CHECK_FOR_UPDATE': 'Check for update',
      'UPDATE_UI_NOW': 'Update UI now',
      'BINS_UPDATE': 'Binaries update',
      'UPDATE_BINS_NOW': 'Update binaries now',
      'CLI_SELECT_A_COIN': 'Select a coin and type in CLI compatible command',
      'CLI_NATIVE_COIN': 'Select native coin',
      'IMPORT': 'Import',
      'CHECK': 'Check',
      'VALIDATE': 'Validate',
      'COPY_TO_CLIPBOARD': 'Copy to clipboard',
      'EMPTY_DEBUG_LOG': 'Debug.log is empty',
      'RESTART': 'Restart',
      'WALLET_INFO': 'Wallet Info',
      'ADD_COIN': 'Add Coin',
      'STOP': 'Stop',
      'START': 'Start',
      'ACTIVE_ADDRESS': 'active address',
      'NO_DATA': 'No history available',
      'LOADING_HISTORY': 'Loading transaction history',
      'CLOSE': 'Close',
      'SHOW': 'Show',
      'SHOWING': 'Showing',
      'OF': 'of',
      'TO_ALT': 'to',
      'SEARCH': 'Search',
      'PREVIOUS': 'Previous',
      'NEXT': 'Next',
      'ENTRIES_SM': 'entries',
      'SYNC_ERR_BLOCKS': 'Connecting to peers...',
      'SELECT_A_COIN': 'Select Coin to add to Agama Wallet',
      'WALLETS': 'Wallets',
      'ACTIVATE_COIN': 'Activate Coin',
      'WELCOME_PLEASE_ADD': 'Welcome. Please add a coin to start.',
      'SELECT_SEED_TYPE': 'Please select compatible wallet seed type',
      'SELECT': '-Select-',
      'NATIVE_MODE': 'Native Mode',
      'NATIVE_MODE_DESC1': 'This mode is ONLY available for KOMODO Coin, PAX FIAT Chains, Assetchains, and Geckochains. ' +
                           'This mode uses the',
      'NATIVE_MODE_DESC2': 'instead of the',
      'NATIVE_MODE_DESC3': 'to query blockchain data',
      'NATIVE_MODE_DESC4': 'is the only mode which allows you to make',
      'NATIVE_MODE_DESC5': 'Z Transactions',
      'NATIVE_MODE_DESC6': 'Private Transactions',
      'CLOSE': 'Close',
      'PLEASE_USE': 'Please use either',
      'OR': 'or',
      'TO_USE': 'to use',
      'WELCOME_LOGIN': 'Welcome. Please login',
      'WALLET_SEED': 'Wallet Seed',
      'SIGN_IN': 'Sign in',
      'CREATE_WALLET': 'Create new wallet',
      'LOGIN_ANOTHER_WALLET': 'Login to another wallet',
      'CONFIRM_SEED': 'Confirm Wallet Seed',
      'REGISTER': 'Register',
      'BACK_TO_LOGIN': 'Back to Login',
      'TOGGLE_NAV': 'Toggle navigation',
      'TOGGLE_SEARCH': 'Toggle Search',
      'TOGGLE_MENUBAR': 'Toggle menubar',
      'SETTINGS': 'Settings',
      'LOGOUT': 'Logout',
      'DASHBOARD': 'Dashboard',
      'WALLET_SETTINGS': 'Wallet Settings',
      'KMD_WALLET': 'Komodo Wallet',
      'ZC_WALLET': 'Zcash Wallet',
      'ACTIVE_COINS': 'Active Coins',
      'TRANSACTIONS': 'Transactions',
      'SEND': 'Send',
      'RECEIVE': 'Receive',
      'BUNDLES': 'Bundles',
      'BALANCES': 'Balances',
      'BALANCE': 'Balance',
      'VALIDATED': 'Validated',
      'NO_WALLET_CAPS': 'NO WALLET SELECTED',
      'PLEASE_SELECT_A_WALLET': 'Please select a wallet from active coins list on left',
      'ADDRESS': 'Address',
      'MY': 'My',
      'COPY': 'copy',
      'INTEREST_EARNED': 'Interest Earned',
      'TOTAL_BALANCE': 'Total Balance',
      'GET_BALANCE': 'Get Balance',
      'REFRESH': 'Refresh',
      'LIST_UNSPENT': 'List Unspent',
      'LIST_TRANSACTIONS': 'List Transactions',
      'TRANSACTION_HISTORY': 'Transactions History',
      'DIRECTION': 'Direction',
      'CONFIRMATIONS': 'Confirmations',
      'AMOUNT': 'Amount',
      'TIME': 'Time',
      'DEST_ADDRESS': 'Dest. Address',
      'TX_DETAIL': 'Tx Detail',
      'FILL_SEND_FORM': 'Fill Send Form',
      'FILL_SEND_DETAILS': 'Fill sending transaction details',
      'CONFIRMING': 'Confirming',
      'CONFIRM_DETAILS': 'Confirm if details are correct',
      'PROCESSING_TX': 'Processing Tx',
      'PROCESSING_DETAILS': 'Processing and showing details',
      'SEND_FROM': 'Send From',
      'SEND_TO': 'Send To',
      'FEE': 'Fee',
      'TOTAL': 'Total',
      'AMOUNT_SM': 'amount',
      'DONT_SEND': 'Don\'t Send Transaction. Just give me signed transaction bytes.',
      'TO': 'To:',
      'TX_FEE_REQ': 'Transaction Fee (Required by miners)',
      'FROM': 'From:',
      'CONFIRM': 'Confirm',
      'BACK': 'Back',
      'TRANSACTION_RESULT': 'Transaction Result',
      'KEY': 'Key',
      'VALUE': 'Value',
      'INFO': 'Info',
      'MAKE_ANOTHER_TX': 'Make Another Transaction',
      'RECEIVING_ADDRESS': 'Receiving Addresses',
      'TYPE': 'Type',
      'INTEREST': 'Interest',
      'ACTIVATING_CHAIN': 'Activating best chain',
      'KMD_STARTED': 'Komodo daemon has been started and is processing.<br>' +
                     'Please wait while the best chain is being activated.<br>' +
                     'Tip: in case sync is stuck restart the wallet.',
      'CONNECTIONS': 'Connections',
      'TRANSPARENT_BALANCE': 'Transparent Balance',
      'Z_BALANCE': 'Private (Z) Balance',
      'INTEREST_EARNED': 'Interest Earned',
      'ZT_BALANCE': 'Total (Z+T) Balance',
      'GET_NEW_ADDRESS': 'Get New Address',
      'TRANSPARENT_ADDRESS': 'Transparent Address',
      'PRIVATE_Z_ADDRESS': 'Private (Z) Address',
      'OPERATIONS_STATUSES': 'Operations Statuses',
      'STATUS': 'Status',
      'RESULT': 'Result',
      'WALLET_INFO': 'Wallet Info',
      'WALLET_VERSION': 'Wallet Version',
      'UNCONFIRMED_BALANCE': 'Unconfirmed Balance',
      'IMMATURE_BALANCE': 'Immature Balance',
      'TOTAL_TX_COUNT': 'Total Transactions Count',
      'INFO': 'Info',
      'VERSION': 'Version',
      'PROTOCOL_VERSION': 'Protocol Version',
      'NOTARIZED': 'Notarized',
      'BLOCKS': 'Blocks',
      'DIFFICULTY': 'Difficulty',
      'PAY_TX_FEE': 'Pay Transaction Fee',
      'RELAY_FEE': 'Relay Fee',
      'ERRORS': 'Errors',
      'ADD_NODE': 'Add Node',
      'USE_THIS_SECTION': 'Use this section to check if the node IP you wish to add is allready active as peer of your coin:',
      'SELECT_COIN': 'Select Coin',
      'CHECK_NODES': 'Check Nodes',
      'USE_THIS_SECTION_PEER': 'Use this section to add a peer IP to a selected coin:',
      'WALLET_BACKUP': 'Wallet Backup',
      'FIAT_CURRENCY': 'Fiat Currency',
      'EXPORT_KEYS': 'Export Keys',
      'ONLY_ACTIVE_WIF_KEYS': 'Only the active coin wallet WIF keys will be shown here.<br>' +
                              'You can use these WIF keys to import to another coin wallets.',
      'PLEASE_KEEP_KEYS_SAFE': 'Please keep these keys extra safe and secure.',
      'PASSPHRASE': 'Passphrase',
      'GET_WIF_KEYS': 'Get WIF Keys',
      'IMPORT_KEYS': 'Import Keys',
      'IMPORT_KEYS_DESC_P1': 'This section allows you to import private key of all iguana supported coins, Assetchain, Geckochain, or PAXchain by the wallet.',
      'IMPORT_KEYS_DESC_P2': 'It is not mandatory to have that coin active in the wallet for which you are executing import private key process.',
      'IMPORT_KEYS_DESC_P3': 'You\'ll also notice the private key you imported for one coin or chain will also be showing a new address in all other coin wallets\' receiving address section. ' +
                 'It is normal.',
      'INPUT_PRIV_KEY': 'Input Private Key',
      'IMPORT_PRIV_KEY': 'Import Private Key',
      'EMPTY_PASSPHRASE_FIELD': 'Empty passphrase field',
      'WALLET_RESCAN_FINISHED': 'Wallet rescan is finished',
      'ADDRESS_IMPORTED': 'Address imported',
      'ADDRESS_IMPORTED_RESCAN_IN_PROGRESS': 'Address imported. Wallet rescan is in progress. Please wait until it is finished.',
      'DEBUG_LOG': 'Debug',
      'DEBUG_LOG_DESC': 'This section allows you to read last N lines from debug log file.',
      'DEBUG_LOG_LINES': 'Input number of lines to read',
      'TARGET': 'Target',
      'LOAD_DEBUG_LOG': 'Load debug log',
      'REFRESH_FUNDS': 'Refresh Funds',
      'INFO': 'Info',
      'ENTER': 'Enter',
      'ADDR_SM': 'address',
      'ACTIVATING': 'Activating',
      'QRCODE': 'Show QR code',
      'SCAN_QR_CODE': 'Scan QR Code',
      'SCAN_QRCODE_WEBCAM': 'Scan QR Code with webcam',
      'TOGGLE_ZERO_ADDRESSES': 'Toggle empty addresses',
      'NEXT_PAGE': 'Next Page',
      'PREVIOUS_PAGE': 'Previous Page',
      'CREATE_INVOICE': 'Create Invoice',
      'CREATE_INVOICE_QR': 'Create Invoice QR Code',
      'QR_CONTENT': 'QR Content',
      'CHOOSE_RECEIVING_ADDRESS': 'Choose Address',
      'SAVE_AS_IMAGE': 'Save as Image',
      'OPEN_TRANSACTION_IN_EPLORER': 'Open transaction in @template@ Explorer',
    },
    'ATOMIC': {
      'RAW_OUTPUT': 'Raw Output',
      'SUBMIT': 'Submit',
      'INPUT_PLACEHOLDER': 'addr, txid, blockash etc.',
      'SELECT_COMMAND': 'Select Command',
    },
    'ADD_COIN': {
      'SYNC_ONLY': 'Sync only',
      'SAVE_SELECTION': 'Save Selection',
      'LOAD_SELECTION': 'Load Selection',
      'ACTIVATE_ALL': 'Activate all',
      'ADD_ANOTHER_COIN': 'Add another coin',
      'ALREADY_ADDED': 'is already added',
      'COIN_ALREADY_ADDED': 'Coin already added',
      'IN': 'in',
      'MODE': 'mode',
      'CRYPTO_CURRENCIES': 'Crypto Currencies',
      'ASSETCHAINS': 'Assetchains',
      'FIAT_CURRENCIES': 'Fiat Currencies',
    },
    'JUMBLR': {
      'TO_SM': 'to',
      'ABOUT': 'About Jumblr',
      'JUMBLR_FUNCTIONS': 'Jumblr functions all locally which means no middle man is required to jumble your funds. ' +
                          'You take control over the whole process.',
      'TIP': 'Tip',
      'TIP_DESC': 'to achive maximum anonimity setup Jumblr node on a dedicated piece of hardware (laptop or VPS), use a separate IP address for main Jumblr node',
      'PUBLIC_NODE': 'Public node',
      'PRIVATE_NODE': 'Private node',
      'DEPOSIT_ADDRESS': 'Deposit address',
      'SECRET_ADDRESS': 'Secret address',
      'DEPOSIT_FUNDS': 'Deposit funds',
      'HOW_TO_USE': 'How to use Jumblr',
      'CREATE_DEPOSIT_ADDRESS': 'Create deposit address',
      'CREATE_SECRET_ADDRESS': 'Create secret address',
      'SEND_FUNDS_TO_DEPOSIT': 'Send funds to deposit address',
      'PLEASE_WRITE_DOWN_PASSPHRASE': 'Please write down your Jumblr passphrase and keept it safe.',
      'THIS_IS_YOUR_MAIN_RECOVERY': 'This is your main recovery passphrase.',
      'ALL_JUMBLR_ADDRESSES_CAN_BE': 'All Jumblr addresses can be regenrated based on it.',
      'DONT_USE_SMART_EDITORS': 'do not use smart editors to store your passphrase as they tend to add extra characters.<br>This may result in passphrase mismatch with the original passphrase.',
      'PASSPHRASE_COPIED': 'Passphrase copied',
      'CREATE_JUMBLR_DEPOSIT_ADDRESS': 'Create Jumblr deposit address',
      'YOUR_JUMBLR_DEPOSIT_ADDRESS': 'Your Jumblr deposit address',
      'JUMBLR_SECRET_DESC_P1': 'Jumblr secret addresses are used for the final z -> t transactions.',
      'JUMBLR_SECRET_DESC_P2': 'In order to allow larger accounts to obtain privacy, up to 777 secret addresses are supported.',
      'JUMBLR_SECRET_DESC_P3': 'Whenever a z -> t stage is activated, a random secret address from the list of the then active secret addresses is selected.',
      'JUMBLR_SECRET_DESC_P4': 'To add a new set of secret addresses enter address count below. The passphrase below is exactly the same you saw on the previous step.',
      'JUMBLR_SECRET_DESC_P5': 'Your Jumblr secret address recovery passphrase will have the following pattern',
      'JUMBLR_SECRET_DESC_P6': 'Where XXX any number from 001 to 777',
      'NUMBER_OF_SECRET_ADDR': 'Number of secret addresses',
      'CREATE_JUMBLR_SECRET_ADDR': 'Create Jumblr secret address(es)',
      'SHOW_ADDRESS_LIST': 'Show address list',
      'DEPOSIT_FORM_P1': 'Use the form below to send funds to your jumblr deposit address.',
      'DEPOSIT_FORM_P2': 'You can also send funds to deposit address from an external service or another wallet.',
      'IMPORT_SECRET_ADDRESS': 'Import secret address',
      'CHECK_FUNDS': 'Check funds',
      'SECRET_REGEN_DESC_P1': 'Enter your Jumblr passphrase you got previously during Public node configuration to import secret address.',
      'SECRET_REGEN_DESC_P2': 'Passphrase example',
      'SECRET_REGEN_DESC_P3': 'The form below will "regenerate" Jumblr secret address based on passphrase provided.',
      'SECRET_REGEN_DESC_P4': 'After this final step expect to see funds processed and credited to your address after 2 days period.',
      'IMPORT_JUMLR_SECRET_ADDRESSES': 'Import Jumblr secret address(es)',
      'SHOW_ADDRESS_LIST': 'Show address list',
      'NOTICE': 'EXPERIMENTAL TEST VERSION ONLY',
      'DESCRIPTION': 'Jumblr feature is very experimental and for now, is Only enabled for testing and debugging. ' +
                     'Please use the current version of Jumblr only with small amounts if you are participating in testing this feature.',
      'NEED_NATIVE': 'Need Native Mode Komodo',
      'TO_USE_JUMBLR': 'To use Jumblr feature, you need to activate Komodo in Native Mode.',
      'IF_YOU_ALREADY_RUNNING': 'If you are already running Komodo in either Basilisk Mode or Full Mode, close the wallet and restart again to start Komodo In Native Mode.',
      'THIS_SCREEN_DOESNT_REFRESH': 'This screen does not auto refresh. ' +
                                    'You will need to hit the Refresh button on the top right corner of the screen to get latest Jumblr data.',
      'FEW_SECURITY_NOTES': 'Few Security Notes for your Privacy and Anonymity of funds',
      'FEW_SECURITY_NOTES_DESC1': 'Jumblr addresses are your Private Addresses.',
      'FEW_SECURITY_NOTES_DESC2': 'DO NOT SHARE your Jumblr addresses with anyone.',
      'FEW_SECURITY_NOTES_DESC3': 'Jumblr addresses are like YOUR PASSWORD. Keep them safe, secure and hidden.',
      'FEW_SECURITY_NOTES_DESC4': 'Only YOU should know your Jumblr Address. Nobody else.',
      'FEW_SECURITY_NOTES_DESC5': 'Sharing your Jumblr Addresses with ANYONE will defeat the purpose of using Jumblr, and your funds and transactions will not be private anymore.',
      'ACCESS_JUMBLR_FUNDS': 'How to Access your Jumblr Funds',
      'ADDRESS_ACCESSIBLE_EASILY': 'Your Jumbler Addresses are accessible easily. For example you logged into your wallet with passphrase',
      'TO_ACCESS': 'To access your Jumbler address funds Logout.',
      'CLOSE_IAPP': 'Close Iguana App.',
      'START_IAPP': 'Start Iguana App again.',
      'START_KMD': 'Start Komodo in either Full Mode or Basilisk Mode.',
      'WORD_JUMBLR': 'Then add word \'jumblr \' before your passphrase.',
      'SMALL_LETTERS': '"jumblr" is all in small letters.',
      'WHITE_SPACE': 'There is a white space after "jumblr ".',
      'PER_EXAMPLE': 'So as per this example, your Jumbler Addresses are accessible with:',
      'LOGIN_WITH_JUMBLR': 'You\'ll login with your Jumblr passphrase to access funds and will be able to use it just like any other wallet address.',
      'AGAIN_DONT_SHARE': 'Again, DO NOT SHARE YOUR JUMBLR ADDRESS WITH ANYONE.',
      'USING_JUMBLR': 'Using Jumblr',
      'RUN_KMD': 'Run Komodo in Native Mode',
      'LOGIN_KMD': 'Login with your passphrase',
      'GO_TO': 'Go to Jumblr Menu',
      'FIND_DEPOSIT_ADDR': 'There find your Deposit Address for coin you want to anonymise your funds. (For a start only KMD is supported. BTC support will come in later versions)',
      'YOU_SEND_FUNDS': 'You send your funds to deposit address.',
      'KEEP_WALLET_OPEN': 'Keep your wallet open',
      'IMPORTANT_FUNDS': '[IMPORTANT] Funds are processed in lot sizes 100 KMD, 1000 KMD, and 10,000 KMD.',
      'LARGE_LOT': 'The large lot sizes will process first, and then smaller.',
      'EG': 'For example, you sent 1393 KMD to KMD Deposit Address.<br>' +
            'First it will process 1000 KMD<br>' +
            'then 100 KMD<br>' +
            'then 100 KMD<br>' +
            'then 100 KMD',
      '93_KMD': '93 KMD will keep waiting in deposit address.',
      'TO_CLEAR_THEM': 'To clear them you\'ll have to send 7 KMD more to your KMD Deposit Address.',
      'WHEN_IT_TOTALS': 'When it totals to 100 KMD, it will process to your KMD Jumblr Address.',
      'JADDR': 'Jumblr Addresses',
      'BTC_DEPOSIT': 'BTC Deposit',
      'SHOW_HIDE': 'Show/Hide',
      'HIDDEN': 'Hidden for security reason.',
      'KMD_DEPOSIT': 'KMD Deposit',
      'JSTATUS': 'Jumblr Status',
      'RESULT': 'Result',
      'DEPOSITED': 'Deposited',
      'PUB_TO_PRIV': 'Public to Private',
      'PRIV_TO_PRIV': 'Private to Private',
      'PRIV_TO_PUB': 'Private to Public',
      'FINISHED': 'Finished',
      'PENDING': 'Pending',
      'ERROR': 'Error',
    },
    'DASHBOARD': {
      'SELECT_ADDRESS': '- Select Address -',
      'SEND_TOADDR_REQ': 'To Address is required.',
      'SEND_FROMADDR_REQ': 'From Address is required.',
      'SEND_AMOUNT_REQ': 'Please enter amount to send.',
      'SEND_FEE_REQ': 'Make sure you have fee entered. Default value is',
      'SEND_TOTAL_REQ': 'Make sure you have both amount and fee entered to calculate final total.',
      'SEND_TX_PROGRESS': 'The transaction submitted is processing. Once processed the transaction details will be displayed here.',
      'SEND_NATIVE_SYNC_WARNING': 'Your wallet is not fully synced! Please wait until it reached 100% to avoid possible transaction send implications.',
      'SUBSTRACT_FEE': 'Subtract fee from amount',
      'UNKNOWN': 'Unknown',
      'IN': 'IN',
      'OUT': 'OUT',
      'MINED': 'Mined',
      'IMMATURE': 'Immature',
      'ZADDR_NOT_LISTED': 'Z Address not listed by wallet',
      'ADDR_COPIED': 'Address Copied',
      'QR_ERR_NO_VIDEO_DEVICE': 'Error: No video input devices found!',
      'QR_ERR_UNKNOWN': 'Error: unknown error!',
      'SPV_CONN_ERROR': 'Connection error!',
      'SPV_CONN_ERROR_P1': 'Try to connect to another SPV server.',
      'SPV_CONN_ERROR_P2': 'To do that go to "Settings", select "SPV Server List" tab, choose new server and click "OK".',
      'FAILED_TX_INFO': 'Transaction failed or block reindexing is in progress. Failed transactions usually rejected after a while resulting in your funds being credited back.',
      'SPV_CLAIMED_INTEREST': 'Claimed interest',
      'CLAIM_INTEREST_HELPER_BAR_P1': 'You have',
      'CLAIM_INTEREST_HELPER_BAR_P2': 'to claim.',
      'CLAIM_INTEREST_HELPER_BAR_P3': 'Claim now',
      'SEARCH': 'Search',
      'WIN_SYNC_WORKAROUND_APPLIED': 'Windows sync workaround is applied. Closing the app...',
      'WIN_SYNC_WORKAROUND_APPLY_FAILED': 'Unable to apply Windows sync workaround!',
      'WIN_SYNC_WORKAROUND_REVERTED': 'Current sync state reached 80% level. Windows sync workaround is disabled. Changes will be applied next time you start the app.',
      'WIN_SYNC_WORKAROUND_CTA_P1': 'Slow sync speed on Windows? Try this workaround.',
      'WIN_SYNC_WORKAROUND_CTA_P2': 'It will add maxconnections=1 in komodo.conf file and force close the app.',
      'WIN_SYNC_WORKAROUND_CTA_P3': 'Please run the app again after that.',
      'APPLY_WORKAROUND': 'Apply workaround',
      'CURRENT_BLOCK_SM': 'current block',
    },
    'TOASTR': {
      'KOMODO_DATADIR_INVALID': 'Komodo datadir path is invalid',
      'KOMODO_DATADIR_NOT_DIR': 'Komodo datadir path is not a directory',
      'INVALID_ADDRESS': 'Invalid @template@ address',
      'RESTART_AGAMA_WITH_REINDEX_PARAM': 'Restart Agama and run Komodo with -reindex param',
      'JUMBLR_DEPOSIT_ADDRESS_SET': 'Jumblr deposit address is set',
      'JUMBLR_SECRET_ADDRESSES_IMPORTED': 'Jumblr secret addresses imported',
      'JUMBLR_SECRET_ADDRESS_IMPORTED': 'Jumblr secret address imported',
      'JUMBLR_WRONG_PASSPHRASE': 'Provided passphrase has wrong format',
      'JUMBLR_SECRET_ADDRESS_SET': 'Jumblr secret address is set',
      'JUMBLR_SECRET_ADDRESSES_SET': 'Jumblr secret addresses are set',
      'ENTER_CORRECT_ADDR_COUNT': 'Enter a correct address count value',
      'TXID_COPIED': 'Transaction ID copied',
      'CLAIM_INTEREST_BALANCE_SENT_P1': 'Your full balance is sent to address',
      'CLAIM_INTEREST_BALANCE_SENT_P2': 'Check back your new balance in a few minutes.',
      'SETTINGS_RESET': 'Settings are reset to default',
      'SETTINGS_SAVED': 'Settings are saved',
      'TRANSACTION_FAILED': 'Transaction failed',
      'WALLET_NOTIFICATION': 'Wallet Notification',
      'ACCOUNT_NOTIFICATION': 'Account Notification',
      'COIN_NOTIFICATION': 'Coin Notification',
      'TX_NOTIFICATION': 'Transaction Notification',
      'SERVICE_NOTIFICATION': 'Service Notification',
      'LOGIN_NOTIFICATION': 'Login Notification',
      'SETTINGS_NOTIFICATION': 'Settings Notification',
      'RECADDR_UPDATED': 'Receiving Address list updated',
      'SWITCHED_TO': 'switched to',
      'MODE': 'Mode',
      'TX_SENT': 'Transaction Sent',
      'TX_SEND_ERR': 'Unable to complete transaction',
      'LOOKS_LIKE': 'Looks like',
      'ALREADY_RUNNING': 'already running',
      'STARTED_IN': 'started in',
      'KOMODO_ERR': 'Unable to start Komodod',
      'SIGNED_TX_GENERATED': 'Signed transaction generated',
      'SIGNED_TX_GENERATED_FAIL': 'Signed transaction Failed to generate',
      'SENDING_TX': 'Sending Transaction to Network',
      'SIGNED_TX_SENT': 'Signed transaction sent successfully',
      'GETTING_TXID_INFO': 'Getting txid info for updating funds data',
      'REFRESHING_FUNDS': 'Refreshing Wallet Funds',
      'TX_FAILED': 'Sent Transaction failed. Please check send Transaction page for details.',
      'TX_SENT_ALT': 'Transaction sent successfully. Check send section for details.',
      'COIN_STARTED': 'coin started',
      'ADDR_ALREADY_REG': 'address already registered on network.',
      'REG': 'Registered',
      'REG_ADDR': 'address on network.',
      'REG_ADDR_FAILED': 'address Registeration failed. Please try again.',
      'INVALID_QUERY': 'Invalid query sent for',
      'TRY_AGAIN': 'Please try again.',
      'ADDR_ISNT_REG': 'Address isn\'t Registered on Network. Please Register',
      'INVALID_QUERY_ALT': 'Invalid query sent. Please try again.',
      'VALIDATION_SUCCESS': 'Validation Success on Network',
      'KMD_NATIVE_CON_ERROR': 'Connection Error. Is external wallet running?',
      'KMD_IGUANA_CON_ERROR': 'Connection Error. Is iguana connected to external wallet?',
      'LOGIN_SUCCESSFULL': 'Login Successfull',
      'OPPS': 'Opps... Something went wrong!',
      'INVALID_PASSPHRASE': 'Invalid Passphrase. Make sure your passphrase is correct, or create new wallet.',
      'WALLET_CREATED_SUCCESFULLY': 'Wallet created successfully',
      'LOGOUT_SUCCESSFULL': 'Logout Successfull',
      'WALLET_LOCKED': 'Wallet Locked Successfully',
      'PRIV_KEY_IMPORTED': 'Private Key Imported Successfully!',
      'PRIV_KEY_NOT_IMPORTED': 'Private Key is not imported.',
      'ADDED_TO': 'added to',
      'SUCCESSFULLY': 'Successfully',
      'COIN_SELECTION': 'Coin Selection',
      'SELECTION_NOT_FOUND': 'Local coin list is not found',
      'AWAITING_TX_RESP': 'Awaiting transaction data response',
    },
    'COIN_WALLETS': {
      'TX_FAILED': 'Transaction Failed',
      'TX_SUCCESS': 'Transaction Successful',
      'TX': 'Transaction',
    },
    'IAPI': {
      'PUBLIC_SM': 'public',
      'CON_STATUS': 'Connection status',
    },
    'KMD_NATIVE': {
      'SELECT_ADDRESS': 'Select Transparent or Private Address',
      'SELECT_ADDRESS_ALT': 'Select Transparent or Private KMD Address',
      'PRIVATE': 'private',
      'NEW_ADDR_GENERATED': 'New address generated successfully',
      'QUEUED': 'Queued',
      'PLEASE_REFRESH': 'Please press refresh button in a minute or so to see updated status',
      'EXECUTING': 'Executing',
      'FAILED': 'Failed',
      'SUCCESS': 'Success',
      'MESSAGE': 'Message',
      'EXECUTION_SECONDS': 'Execution Seconds',
      'WAIT_UNTIL_SYNCED': 'Transaction history is unavailable during synchronization progresss',
      'TXID': 'Transaction ID',
      'ZCASH_PARAMS_MISSING': 'Zcash params are missing or incomplete:',
      'ZCASH_PARAMS_MISSING_ROOT_DIR': '- missing root folder',
      'ZCASH_PARAMS_MISSING_PROVING_KEY': '- missing proving key',
      'ZCASH_PARAMS_MISSING_VERIFYING_KEY': '- missing verifying key',
      'ZCASH_PARAMS_MISSING_PROVING_KEY_SIZE': '- proving key size is incorrect',
      'ZCASH_PARAMS_MISSING_VERIFYING_KEY_SIZE': '- verifying key size is incorrect',
    },
    'LOGIN': {
      'PIN_LOGIN_INFO': 'You can login be entering a login seed or by selecting a pin',
      'QUICK_ACCESS': 'Quick access',
      'PWD_REQ': 'Password is required.',
      'WALLET_SEED_REQ': 'Wallet seed is required.',
      'SAVED_WALLET_SEED': 'Have you saved your wallet seed?',
      'SEED_MAKE_SURE_BACKUP': 'Make sure you have it backed up. Without this seed you won\'t be able to access your wallet in the future!',
      'YES_I_BACKUP': 'Yes, I have taken backup.',
      'WALLET_LOCKED_LOGIN': 'Wallet Locked. Please login.',
      'CANCEL': 'Cancel',
      'UNLOCK': 'Unlock',
      'SIGN_IN': 'Sign In',
      'WELCOME': 'Welcome',
      'ENTER_VALUE_AGAIN': 'Please enter the same value again',
      'CUSTOM_WALLET_SEED': 'Custom wallet seed',
      'MUST_ENTER_SEED': 'You must enter a seed',
      'INVALID_SEED': 'Invalid Seed',
      'SEED_NOT_OF_TYPE': 'The inserted seed is not of type',
      'IGUANA_SEED': 'Iguana (256 bits)',
      'WAVES_SEED': 'Waves',
      'NXT_SEED': 'NXT',
      'SEED_COPIED': 'Seed copied',
      'SEED_SUCCESSFULLY_COPIED': 'The seed was successfully copied',
      'ENCRYPT_SEED': 'Encrypt login seed',
      'PUBKEY': 'pubkey',
      'ENCRYPT_KEY': 'Encrypt key',
      'DECRYPT_KEY': 'Decrypt key'
    },
    'SIDEBAR': {
      'EDEX_MOTTO': 'Most Secure, Easy and Native Decentralised Exchange',
      'JUMBLR_MOTTO': 'Secure, Native and Decentralised Coin Anonymizer',
    },
    'SETTINGS': {
      'WRONG_PASSPHRASE': 'Wrong passphrase!',
      'SPV_SERVER_LIST_DESC': 'Server list selection is only available for active coins that have more than 1 server to connect to.',
      'SPV_SERVERS': 'SPV servers list',
      'SPV_SINGLE_SERVER_NOTICE': 'There is only one electrum server available. SPV verification is coming from the same server providing all remote data.',
      'KMD_MAIN_SYNC_ONLY': 'KMD main sync only',
      'RPC_FETCH_ONLY_DESC': 'Fetch block synchronization data only. Skip any other requests that can deteriorate sync speed.',
      'RESET_TO_DEFAULT': 'Reset to default',
      'PROGRESS': 'Progress',
      'SUPPORT': 'Support',
      'SUPPORT_TICKETS': 'Support tickets',
      'GET_SLACK_INVITE': 'Get Slack invite',
      'ADDRESS_LIST': 'Address',
      'WIF_KEY_LIST': 'WIF (Wallet Import Format) key',
      'CLI_RESPONSE': 'CLI response',
      'PASSPHRASE_REQ': 'Passphrase is required.',
      'SAVE_APP_CONFIG': 'Save app config',
      'CONFIG_RESTART_REQUIRED': 'Any changes to app config require app restart!',
      'APP_CONFIG': 'App Config',
      'APP_INFO': 'App Info',
      'APP_RELEASE': 'App Release',
      'NAME': 'Name',
      'VERSION': 'Version',
      'SYS_INFO': 'System Info',
      'ARCH': 'Architecture',
      'OS_TYPE': 'OS Type',
      'OS_PLATFORM': 'OS Platfrom',
      'OS_RELEASE': 'OS Release',
      'CPU': 'CPU',
      'CPU_CORES': 'CPU Cores',
      'MEM': 'Memory',
      'LOCATIONS': 'Locations',
      'CACHE': 'Cache',
      'CONFIG': 'Config',
      'BIN': 'Bin',
      'DIR': 'Dir',
      'ADD_PEER_IP': 'Add Peer IP',
      'APP_SESSION': 'App Session',
      'EXPORT_KEYS_NOTE': 'Note: it\'s important that you provide the same passphrase you used to login to the wallet!',
    },
    'TX_INFO': {
      'ADDRESS': 'address',
      'AMOUNT': 'amount',
      'CATEGORY': 'category',
      'CONFIRMATIONS': 'confirmations',
    },
    'ZCPARAMS_FETCH': {
      'DOWNLOADING_ZCASH_KEYS': 'Downloading Zcash keys',
      'BOTH_KEYS_VERIFIED': 'Both Zcash param keys are downloaded and verified!',
      'PLEASE_RESTART': 'Please restart the app.',
      'ZCPARAMS_VERIFICATION_ERROR_P1': 'Zcash param',
      'ZCPARAMS_VERIFICATION_ERROR_P2': 'verification error!',
      'ZCPARAMS_FETCH': 'ZCash Params Fetch',
      'SELECT_ZCPARAMS_SOURCE': 'Select resource to download Zcash params keys from',
      'DOWNLOAD': 'Download',
    },
    'SEND': {
      'RESULT': 'Result',
      'PROCESSING_TX': 'Processing transaction',
      'TRANSACTION_ID': 'Transaction ID',
      'SUCCESS_SM': 'success',
      'WARNING': 'Warning',
      'WARNING_SPV_P2': 'your wallet data is verified only by a single server!',
      'WARNING_SPV_P3': 'If you still want to continue press "Confirm".',
      'SPV_VERIFYING': 'Verifying transaction data',
      'PROCESSING_REQ': 'Processing requests',
      'LOCKED_PLEASE_WAIT': 'Locked, please wait',
      'UPDATE': 'Update',
      'SELECT_T_OR_Z_ADDR': 'Select Transparent or Private Address',
      'ENTER_T_OR_Z_ADDR': 'Enter Transparent or Private address',
      'ENTER_ADDRESS': 'Enter address',
      'AWAITING': 'Awaiting in queue',
      'PROCESSING': 'Processing',
      'ERROR_CODE': 'Error Code',
      'WAITING': 'Waiting',
      'PROCESSING_TRANSACTION': 'Processing transaction',
      'NOTE_IT_WILL_TAKE': 'Note: it may take a few minutes to complete the transaction',
      'ENTER_AN_ADDRESS': 'Enter an address',
      'YOU_PICKED_OPT': 'You picked option',
      'PLEASE_WAIT': 'Please wait',
      'SEND_TO_ADDRESS_MIN_LENGTH': 'Send to address must be at least 34 characters long',
      'AMOUNT_POSITIVE_NUMBER': 'Amount must be a positive number',
      'FEE_POSITIVE_NUMBER': 'Fee must be a positive number',
      'TOTAL_AMOUNT_POSITIVE_NUMBER': 'Total amount (amount - fee) must be a positive number',
      'INSUFFICIENT_FUNDS': 'You don\'t have the necessary funds to make this transaction',
      'SELECT_SOURCE_ADDRESS': 'Select source (from) address',
      'QR_COIN_MISMATCH_MESSAGE_IMPORT_COIN': 'QR code had coin ',
      'QR_COIN_MISMATCH_MESSAGE_ACTIVE_COIN': '. You have ',
      'QR_COIN_MISMATCH_MESSAGE_END': ' active in your wallet. Please, check that you have same coin active that you try to import!',
      'QR_COIN_MISMATCH_TITLE': 'Coin Mismatch',
    },
    'FIAT_CURRENCIES': {
      'AUD': 'Australian Dollar (AUD)',
      'BRL': 'Brazilian Real (BRL)',
      'GBP': 'British Pound (GBP)',
      'BGN': 'Bulgarian Lev (BGN)',
      'CAD': 'Canadian Dollar (CAD)',
      'HRK': 'Croatian Kuna (HRK)',
      'CZK': 'Czech Koruna (CZK)',
      'CNY': 'Chinese Yuan (CNY)',
      'DKK': 'Danish Krone (DKK)',
      'EUR': 'Euro (EUR)',
      'HKD': 'Hong Kong Dollar (HKD)',
      'HUF': 'Hungarian Forint (HUF)',
      'INR': 'Indian Rupee (INR)',
      'IDR': 'Indonesian Rupiah (IDR)',
      'ILS': 'Israeli Shekel (ILS)',
      'JPY': 'Japanese Yen (JPY)',
      'KRW': 'Korean Won (KRW)',
      'MYR': 'Malaysian Ringgit (MYR)',
      'MXN': 'Mexican peso (MXN)',
      'NZD': 'New Zealand Dollar (NZD)',
      'NOK': 'Norwegian Krone (NOK)',
      'PHP': 'Philippine Peso (PHP)',
      'PLN': 'Polish Zloty (PLN)',
      'RON': 'Romanian Leu (RON)',
      'RUB': 'Russian Ruble (RUB)',
      'SGD': 'Singapore Dollar (SGD)',
      'ZAR': 'South African Rand (ZAR)',
      'SEK': 'Swedish Krona (SEK)',
      'CHF': 'Swiss Franc (CHF)',
      'THB': 'Thai Baht (THB)',
      'TRY': 'Turkish Lira (TRY)',
      'USD': 'US Dollar (USD)',
    },
    'ASSETCHAINS': {
      'BET': 'BET (BET)',
      'BOTS': 'BOTS (BOTS)',
      'CEAL': 'CEAL NET (CEAL)',
      'COQUI': 'COQUI (COQUI)',
      'CRYPTO': 'CRYPTO (CRYPTO)',
      'HODL': 'HODL (HODL)',
      'DEX': 'DEX (DEX)',
      'JUMBLR': 'JUMBLR (JUMBLR)',
      'KV': 'KV (KV)',
      'MGW': 'MultiGateway (MGW)',
      'MVP': 'MVP Lineup (MVP)',
      'MNZ': 'Monaize (MNZ)',
      'PANGEA': 'PANGEA (PANGEA)',
      'REVS': 'REVS (REVS)',
      'SHARK': 'SHARK (SHARK)',
      'MESH': 'SpaceMesh (MESH)',
      'SUPERNET': 'SUPERNET (SUPERNET)',
      'WLC': 'WIRELESS (WIRELESS)',
    },
  },
};