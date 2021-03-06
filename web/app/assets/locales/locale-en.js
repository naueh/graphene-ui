module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch"
    },
    header: {
        title: "Graphene UI",
        account: "Account",
        dashboard: "Dashboard",
        explorer: "Explorer",
        exchange: "Exchange",
        payments: "Transfer", // temporary, once we have tabs on Payments, I'll change it back to payments (Valentine)
        logout: "Logout",
        settings: "Settings",
        current: "Current Account",
        create_account: "Create Account",
        create_asset: "Create Asset",
        lock: "Lock",
        unlock: "Unlock",
        help: "Help"
    },
    account: {
        asset: "Asset",
        market_value: "Market Value",
        hour_24: "24hr Change",
        recent: "Recent activity",
        name: "Account name",
        more: "see more",
        member: {
            stats: "Membership",
            join: "Joined on",
            registrar: "Registrar",
            referrer: "Affiliate Referrer",
            lifetime_referrer: "Lifetime Referrer",
            network_percentage: "Network",
            fee_allocation: "Fee Allocaiton",
            membership: "Membership",
            fees_paid: "Lifetime fees paid",
            fees_pending: "Pending fees",
            fees_vested: "Pending vested fees",
            referrals: "Referrals",
            rewards: "Cashback Rewards",
            cashback: "Cashback",
            vested: "Vested",
            unknown: "Unknown member",
            lifetime: "Lifetime member",
            basic: "Basic member",
            annual: "Annual subscriber",
            upgrade_lifetime: "Buy Lifetime Subscribtion",
            subscribe: "Buy Annual Subscription",
            expires: "expires",
            membership_expiration: "Membership Expiration"
        },
        user_issued_assets: {
            symbol: "Symbol",
            name: "Asset Name",
            description: "Description",
            max_supply: "Maximum supply",
            precision: "Precision",
            to: "Issue to account",
            details: "Details"
        },
        connections: {
            known: "Known by",
            "black": "Blacklisted by"
        },
        perm: {
            active: "Active Permissions",
            owner: "Owner Permissions",
            publish: "Publish Changes",
            reset: "Reset Changes",
            add: "Add Permission",
            type: "Type",
            key: "Key/Name",
            weight: "Weight",
            threshold: "Threshold",
            confirm_add: "Add",
            cancel: "Cancel",
            add_permission_label: "Enter account name/key and weight",
            account_name_or_key: "Account name or key"
        },
        votes: {
            proxy: "Proxy Voting Account",
            no_proxy: "No Proxy",
            name: "Name",
            info: "Info",
            votes: "Votes",
            url: "Webpage",
            support: "Support",
            workers: "Budget Items",
            publish: "Publish Changes",
            add_witness: "Add",
            remove_witness: "Remove",
            remove_committee: "Remove",
            add_committee: "Add",
            add_committee_label: "Committee Member",
            add_witness_label: "Witness",
            approve_worker: "Approve worker proposal",
            reject_worker: "Reject worker proposal"
        },
        options: {
            num_witnesses: "Desired Witnesses",
            num_committee: "Desired Committee Members",
            memo_key: "Memo Key"
        },
        upgrade: "Upgrade account",
        unlink: "Unlink",
        link: "Link",
        pay: "Pay",
        overview: "Overview",
        history: "History",
        payees: "Payees",
        permissions: "Permissions",
        voting: "Voting",
        orders: "Orders",
        select_placeholder: "Select Account...",
        errors: {
            not_found: "The account %(name)s does not exist, are you sure you spelled it correctly?",
            invalid: "Invalid account name",
            unknown: "Unknown account",
            not_yours: "Not your account"
        }
    },
    pagination: {
        newer: "Newer",
        older: "Older"
    },
    transfer: {
        from: "From",
        pay_from: "Pay From",
        amount: "Amount",
        to: "To",
        memo: "Memo",
        fee: "Fee",
        send: "Send",
        final: "Final balance",
        balances: "Balances",
        available: "Available",
        errors: {
            req: "Required field",
            pos: "Amount must be positive",
            valid: "Please enter a valid, positive number",
            balance: "The final balance must be larger than 0"
        },
        back: "BACK",
        confirm: "CONFIRM",
        broadcasting: "Broadcasting...",
        broadcast: "Your transfer has been broadcast to the network",
        again: "MAKE ANOTHER TRANSFER",
        see: "SEE MY TRANSFERS",
        close: "Close"
    },
    transaction: {
        confirm: "Please confirm the transaction",
        broadcast_success: "Transaction has been broadcast",
        transaction_confirmed: "Transaction confirmed",
        broadcast_fail: "Failed to broadcast the transaction: %(message)s",
        broadcasting: "Broadcasting transaction..",
        broadcasting_short: "Broadcasting..",
        sent: "sent",
        to: "to",
        received: "received",
        from: "from",
        amount_sell: "Amount to sell",
        expiration: "Expiration",
        fill_or: "Fill or kill",
        min_receive: "Minimum amount to receive",
        seller: "Seller",
        collateral: "Collateral",
        coll_ratio: "Initial collateral ratio",        
        coll_maint: "Collateral maintenance ratio",
        "create_key": "Created a public key",
        reg_account: "Registered the account",
        was_reg_account: "registered by",
        create_asset: "created the asset",
        limit_order_sell: "placed order #%(num)s to sell %(sell_amount)s at ",
        limit_order_buy: "placed order #%(num)s to buy %(buy_amount)s at ",
        limit_order_cancel: "cancelled order",
        short_order: "Placed short order to sell",
        short_order_cancel: "Cancelled short ",
        at: "at",
        coll_of: "with collateral of",
        call_order_update: "updated margin position for ",
        lifetime_upgrade_account: "upgraded to lifetime member",
        annual_upgrade_account: "upgraded to annual member",
        update_account: "updated account",
        whitelist_account: "Whitelisted the account",
        whitelisted_by: "Was whitelisted by the account",
        transfer_account: "Transferred the account",
        update_asset: "Updated the asset",
        update_feed_producers: "pdated the feed producers of asset",
        feed_producer: "Became a feed producer for the asset",
        feed_price: "Feed price",
        asset_issue: "Issued",
        was_issued: "Was issued",
        by: "by",
        burn_asset: "Burnt",
        fund_pool: "Funded asset fee pool with",
        asset_settle: "Requested settlement of",
        asset_global_settle: "Requested global settlement of",
        publish_feed: "published feed ",
        committee_member_create: "Created the committee member",
        witness_create: "Created the witness",
        witness_update: "Updated the witness",
        witness_pay: "Withdrew witness pay to account",
        witness_receive: "Received witness from witness",
        proposal_create: "Created a proposal",
        proposal_update: "Updated a proposal",
        proposal_delete: "Deleted a proposal",
        withdraw_permission_create: "Gave withdrawal permission for account",
        withdraw_permission_update: "Updated withdrawal permission for account",
        withdraw_permission_claim: "Claimed withdrawal permission for account",
        withdraw_permission_delete: "Deleted withdrawal permissions for account",
        paid: "paid",
        obtain: "to obtain",
        global_parameters_update: "Updated global parameters",
        file_write: "Wrote a file",
        vesting_balance_create: "created vesting balance of",
        for: "for",
        vesting_balance_withdraw: "Withdrew vesting balance of",
        bond_create_offer: "Created bond offer",
        bond_cancel_offer: "Cancelled bond offer",
        bond_accept_offer: "Accepted bond offer of",
        bond_claim_collateral: "Claimed collateral of",
        bond_pay_collateral: "Paid collateral of",
        create_worker: "Created a budget item with a pay of",
        custom: "Created a custom operation",
        order_id: "Order ID",
        balance_claim: "claimed a balance of %(balance_amount)s from balance ID #%(balance_id)s",
        balance_owner: "Balance owner key",
        balance_id: "Balance ID",
        deposit_to: "Deposited to account",
        claimed: "Total claimed",
        borrow_amount: "Amount to borrow",
        funding_account: "Funding account",
        delta_collateral: "Collateral change",
        delta_debt: "Debt change",
        new_url: "Website",
        publisher: "Publisher",
        trxTypes: {
            transfer: "Transfer",
            limit_order_create: "Place order",
            limit_order_cancel: "Cancel order",
            call_order_update: "Update margin",
            account_create: "Create account",
            account_update: "Update account",
            account_whitelist: "Account whitelist",
            account_upgrade: "Upgrade Account",
            account_transfer: "Transfer Account",
            asset_create: "Create asset",
            asset_update: "Update asset",
            asset_update_bitasset: "Update SmartCoin",
            asset_update_feed_producers: "Update asset feed producers",
            asset_issue: "Issue asset",
            asset_reserve: "Burn asset",
            asset_fund_fee_pool: "Fund asset fee pool",
            asset_settle: "Asset settlement",
            asset_global_settle: "Global asset settlement",
            asset_publish_feed: "Publish feed",
            committee_member_create: "Create committee member",
            witness_create: "Create witness",
            witness_update: "Update witness",
            witness_withdraw_pay: "Witness pay withdrawal",
            proposal_create: "Create proposal",
            proposal_update: "Update proposal",
            proposal_delete: "Delete proposal",
            withdraw_permission_create: "Create withdrawal permission",
            withdraw_permission_update: "Update withdrawal permission",
            withdraw_permission_claim: "Claim withdrawal permission",
            withdraw_permission_delete: "Delete withdrawal permission",
            fill_order: "Fill order",
            committee_member_update_global_parameters: "Global parameters update",
            vesting_balance_create: "Create vesting balance",
            vesting_balance_withdraw: "Withdraw vesting balance",
            worker_create: "Create budget item",
            custom: "Custom",
            assert: "Assert operation",
            balance_claim: "Claim balance",
            override_transfer: "Override transfer"
        }
    },
    explorer: {
        accounts: {
            title: "Accounts"
        },
        blocks: {
            title: "Blockchain",
            globals: "Global parameters",
            recent: "Recent blocks"
        },
        block: {
            title: "Block",
            id: "Block ID",
            witness: "Witness",
            count: "Transaction count",
            date: "Date",
            time: "Time",
            previous: "Previous",
            previous_secret: "Previous secret",
            next_secret: "Next secret hash",
            op: "Operation",
            trx: "Transaction",
            op_type: "Operation type",
            fee_payer: "Fee paying account",
            key: "Public key",
            transactions: "Transaction count",
            account_upgrade: "Account to upgrade",
            lifetime: "Upgrade to lifetime member",
            authorizing_account: "Authorizing account",
            listed_account: "Listed account",
            new_listing: "New listing",
            asset_update: "Asset to update",
            common_options: "Common options",
            new_options: "New options",
            new_producers: "New feed producers",
            asset_issue: "Amount to issue",
            max_margin_period_sec: "Max margin period (s)",
            call_limit: "Call limit",
            short_limit: "Short limit",
            settlement_price: "Settlement price"
        },
        assets: {
            title: "Assets",
            market: "SmartCoins",
            user: "User Issued Assets",
            symbol: "Symbol",
            id: "ID",
            issuer: "Issuer",
            precision: "Precision"
        },
        asset: {
            title: "Asset",
            not_found: "The asset %(name)s does not exist"
        },
        witnesses: {
            title: "Witnesses"
        },
        committee_members: {
            title: "Committee members",
            active: "Total number of active committee members"
        },
        committee_member: {
            title: "Committee member"
        },
        workers: {
            title: "Budget Items"
        },
        proposals: {
            title: "Proposals"
        },
        account: {
            title: "Account"
        }
    },
    settings: {
        inverseMarket: "Market orientation preference",
        unit: "Preferred unit of account",
        confirmMarketOrder: "Ask for confirmation of market orders",
        locale: "Switch language",
        confirm_yes: "Always",
        confirm_no: "Never",
        always_confirm: "Always ask for confirmation",
        wallets: "Wallets"
    },
    footer: {
        title: "Graphene",
        block: "Head block",
        loading: "Loading..."
    },
    exchange: {
        price_history: "Price History",
        order_depth: "Order Depth",
        market_history: "Market History",
        balance: "Your balance",
        lowest_ask: "Lowest ask",
        highest_bid: "Highest bid",
        total: "Total",
        value: "Value",
        price: "Price",
        latest: "Latest Price",
        call: "Call Price",
        volume: "Volume",
        spread: "Spread",
        quantity: "Amount",
        buy: "Buy",
        sell: "Sell",
        confirm_buy: "Confirm order: Buy %(buy_amount)s %(buy_symbol)s at a price of %(price_amount)s %(price_symbol)s",
        confirm_sell: "Confirm order: Sell %(sell_amount)s %(sell_symbol)s at a price of %(price_amount)s %(price_symbol)s"
    },
    markets: {
        choose_base: "Choose base asset",
        filter: "Filter",
        core_rate: "Core rate",
        supply: "Supply",
        search: "Search"
    },
    wallet: {
        title: "Wallet",
        confirm: "Password (confirm)",
        password: "Password",
        existing_password: "Existing Password",
        change_password: "Change Password",
        change_wallet: "Change Wallet",
        wallet_created: "Wallet Created",
        create_wallet: "Create Wallet",
        delete_wallet: "Delete Wallet",
        delete_confirm_line1: "Are you ABSOLUTELY sure?",
        delete_confirm_line2: "Unexpected bad things will happen if you don’t read this!",
        delete_confirm_line3: "This action CANNOT be undone.",
        delete_wallet_name: "Delete Wallet (%(name)s)",
        download: "Download",
        name: "Wallet Name",
        create: "Create",
        console: "Wallet Management Console",
        create_backup: "Create Backup",
        create_backup_of: "Create Backup (%(name)s Wallet)",
        import_backup: "Import Backup",
        restore_backup: "Restore Backup",
        import_keys: "Import Keys",
        brainkey: "Brainkey",
        new_wallet: "New Wallet",
        active_wallet: "Active Wallet",
        verified: "Verified",
        verify_prior_backup: "Verify Prior Backup",
        cancel: "Cancel",
        reset: "Reset",
        done: "Done",
        verify: "Verify",
        invalid_format: "Invalid Format",
        enter_password: "Enter Password",
        downoad: "Download",
        new_wallet_name: "New Wallet Name",
        wallet_exist: "Wallet exists, choose a new name",
        wallet_exist_with_name: "Wallet (%(name)s) exists, please change the name",
        accept: "Accept",
        ready_to_restore: "Ready to Restore",
        restore_wallet_of: "Restore (%(name)s Wallet)",
        restore_success: "Successfully restored (%(name)s) wallet",
        change: "Change (%(name)s Wallet)"
    },
    borrow: {
        title: "Collateral position for %(asset_symbol)s",
        no_valid: "No valid feeds for %(asset_symbol)s",
        coll_ratio: "Collateral ratio",
        adjust: "Adjust position",
        errors: {
            below: "Collateral ratio below maintenance level",
            collateral: "Insufficient collateral balance"
        }
    }
};
