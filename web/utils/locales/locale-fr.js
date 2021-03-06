module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch"
    },
    header: {
        title: "Graphene",
        dashboard: "Accueil",
        explorer: "Explorer",
        exchange: "Échange",
        payments: "Paiments",
        logout: "Déconnexion",
        settings: "Options",
        current: "Mon Compte"
    },
    account: {
        asset: "Actif",
        market_value: "Valeur",
        hour_24: "24hrs",
        recent: "Activité recent",
        name: "Nom du compte",
        more: "voir plus",
        member: {
            stats: "Stats membre",
            join: "Inscription",
            reg: "Enregistré par",
            ref: "Recruté par",
            ref_percentage: "Pourcentage de frais pour le recruteur",
            network_percentage: "Pourcentage de frais pour le reseau",
            fees_paid: "Frais payé",
            fees_pending: "Frais en attente",
            fees_vested: "Frais en attente bloqué",
            in_orders: "Total de %(core_asset)s en ordres",
            referrals: "Recrutements",
            rewards: "Gains totaux",
            cashback: "Gagné",
            vested: "Bloqué"
        },
        connections: {
            known: "Connu par",
            black: "Blacklisté par"
        },
        perm: {
            active: "Permissions actifs",
            owner: "Permissions de proprietaire",
            publish: "Publier les changements",
            reset: "Annuler les changements",
            add: "Rajouter une permission",
            type: "Type",
            key: "Cléf/Nom",
            weight: "Poids",
            threshold: "Limite",
            confirm_add: "Rajouter",
            cancel: "Annuler"
        },
        votes: {
            proxy: "Proxy Voting Account",
            name: "Nom",
            info: "Info",
            support: "Support",
            workers: "Ouvriers",
            no_proxy: "No Proxy",
            votes: "Votes",
            url: "Webpage",
            publish: "Publish Changes",
            add_witness: "Add",
            remove_witness: "Remove",
            remove_committee: "Remove",
            add_committee: "Add",
            add_committee_label: "Committee Member",
            add_witness_label: "Witness"
        },
        upgrade: "Mettre à niveau",
        unlink: "Délier",
        link: "Lier",
        pay: "Payer",
        overview: "Sommaire",
        history: "Historique",
        payees: "Payees",
        permissions: "Permissions",
        voting: "Votes",
        orders: "Ordres",
        select_placeholder: "Selectionnez un compte..",
        errors: {
            not_found: "Le compte %(name)s n'existe pas, veuillez vérifier le nom"
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
        options: {
            num_witnesses: "Desired Witnesses",
            num_committee: "Desired Committee Members",
            memo_key: "Memo Key"
        }
    },
    transfer: {
        from: "De",
        amount: "Montant",
        to: "À",
        memo: "Message",
        fee: "Frais",
        send: "Envoyer",
        "final": "Soldes finaux",
        balances: "Soldes",
        errors: {
            req: "Champ obligatoire",
            pos: "Le montant doit étre positif",
            valid: "Veuillez rentrer un chiffre positif",
            balance: "Le solde final doit être superieur à 0"
        },
        back: "REVENIR",
        confirm: "CONFIRMER",
        broadcast: "Votre transfert a bien été soumis au reseau",
        again: "FAIRE UN AUTRE TRANSFERT",
        see: "VOIRE MES TRANSFERTS",
        available: "Available: ",
        broadcasting: "Broadcasting..."
    },
    transaction: {
        sent: "A envoyé",
        to: "à",
        received: "A reçu",
        from: "de",
        amount_sell: "Montant à vendre",
        expiration: "Expiration",
        fill_or: "Fill or kill",
        min_receive: "Montant minimum à recevoir",
        seller: "Vendeur",
        collateral: "Collateral",
        coll_ratio: "Ratio de collateral initiale",
        coll_maint: "Ratio de Collateral de maintenance",
        create_key: "A créé une cléf public",
        reg_account: "A créé le compte",
        was_reg_account: " a été créé par",
        create_asset: "A créé l'actif",
        limit_order: "A placé un ordre à limite pour vendre",
        limit_order_buy: "A placé un ordre à limite pour acheter",
        limit_order_cancel: "Annulation de l'ordre à limite avec id",
        short_order: "A placé un ordre à découvert pour vendre",
        at: "à",
        coll_of: "avec collateral de",
        call_order_update: "A mis à jour un ordre à découvert",
        upgrade_account: "A mis à niveau le compte",
        update_account: "A mis à jour le compte",
        whitelist_account: "A whitelisté le compte",
        whitelisted_by: "A été whitelisté par le compte",
        transfer_account: "A transferé le compte",
        update_asset: "A mis à jour l'actif",
        update_feed_producers: "A mis à jour les fornisseurs de flux de l'actif",
        feed_producer: "Est devenu un fornisseur de flux pour l'actif",
        asset_issue: "A assigné",
        was_issued: "A été assigné",
        by: "par",
        burn_asset: "A détruit",
        fund_pool: "A financé un pot de frais avec",
        asset_settle: "Requested settlement of",
        asset_global_settle: "Requested global settlement of",
        publish_feed: "A publié un nouveau flux pour l'actif",
        delegate_create: "A créé le délégué",
        witness_create: "A créé le témoin",
        witness_pay: "A retiré",
        proposal_create: "A créé une proposition",
        proposal_update: "A mis à jour une proposition",
        proposal_delete: "A supprimé une proposition",
        withdraw_permission_create: "A donné une permission de retrait du compte",
        withdraw_permission_update: "A mis à jour les permissions de retrait du compte",
        withdraw_permission_claim: "A pris les permissions de retrait du compte",
        withdraw_permission_delete: "A supprimé les permissions de retrait du compte",
        paid: "A payé",
        obtain: "pour obtenir",
        global_parameters_update: "A mis à jour les parametres globaux",
        file_write: "A écrit un fichier",
        vesting_balance_create: "a créé un solde bloqué pour",
        "for": "pour",
        vesting_balance_withdraw: "A retiré du solde bloqué",
        bond_create_offer: "A créé une offre d'obligation",
        bond_cancel_offer: "A annulé l'offre d'obligation",
        bond_accept_offer: "A accepté l'offre d'obligation pour",
        bond_claim_collateral: "A récuperé un collateral de",
        bond_pay_collateral: "A payé un collateral de",
        create_worker: "A créé un ouvrier avec un salaire de",
        custom: "A créé une operation spéciale",
        order_id: "ID de l'ordre",
        balance_claim: "A recuperé un solde de %(balance_amount)s du solde ID #%(balance_id)s",
        balance_owner: "Clèf du solde",
        balance_id: "ID du solde",
        deposit_to: "Versé sur le compte",
        claimed: "Total recuperé",
        trxTypes: {
            transfer: "Transfert",
            limit_order_create: "Ordre à limite",
            limit_order_cancel: "Annulation d'ordre à limite",
            call_order_update: "Mise à jour d'ordre à découvert",
            account_create: "Création de compte",
            account_update: "Mise à jour de compte",
            account_whitelist: "Whiteliste de compte",
            account_upgrade: "Mise à niveau de compte",
            account_transfer: "Transfert de compte",
            asset_create: "Creation d'actif",
            asset_update: "Mise à jour d'actif",
            asset_update_bitasset: "Mise à jour d'actif de marché",
            asset_update_feed_producers: "Mise à jour des flux",
            asset_issue: "Assigner d'un actif",
            asset_reserve: "Destruction d'actif",
            asset_fund_fee_pool: "Financement de pot de frais",
            asset_settle: "Couvrement d'actif",
            asset_global_settle: "Couvrement global d'actif",
            asset_publish_feed: "Publication de flux",
            delegate_create: "Création de délégué",
            witness_create: "Création de témoin",
            witness_withdraw_pay: "Retrait de salaire de témoin",
            proposal_create: "Création d'une proposition",
            proposal_update: "Mise à jour d'une proposition",
            proposal_delete: "Suppresion d'une proposition",
            withdraw_permission_create: "Accord de permission de retrait",
            withdraw_permission_update: "Mise à jour de permission de retrait",
            withdraw_permission_claim: "Prise de permissions de retrait",
            withdraw_permission_delete: "Suppresion des permissions de retrait",
            fill_order: "Remplissage d'ordre",
            delegate_update_global_parameters: "Mise à jour des parametres globaux",
            vesting_balance_create: "Création de solde bloqué",
            vesting_balance_withdraw: "Retrait de solde bloqué",
            worker_create: "Création d'ouvrier",
            custom: "Spécial",
            assert: "Assert operation",
            balance_claim: "Récuperation de solde",
            override_transfer: "Forcing de transfert"
        },
        confirm: "Please confirm the transaction",
        broadcast_success: "Transaction has been broadcast",
        transaction_confirmed: "Transaction confirmed",
        broadcast_fail: "Failed to broadcast the transaction: %(message)s",
        limit_order_sell: "Placed order #%(num)s to sell %(sell_amount)s at %(sell_price)s",
        short_order_cancel: "Cancelled short ",
        witness_receive: "Received witness from witness"
    },
    explorer: {
        accounts: {
            title: "Comptes"
        },
        blocks: {
            title: "Blockchain",
            globals: "Parametres globaux",
            recent: "Blocs recent"
        },
        block: {
            title: "Bloc",
            id: "ID du bloc",
            witness: "Témoin",
            count: "Nombre de transactions",
            date: "Date",
            previous: "Précédent",
            previous_secret: "Précédent secret",
            next_secret: "Prochain hash secret",
            op: "Operation",
            trx: "Transaction",
            op_type: "Type d'operation",
            fee_payer: "Compte payant le frai",
            key: "Cléf public",
            transactions: "Nombre de transactions",
            account_upgrade: "Compte à mettre à niveau",
            lifetime: "Devenir membre à vie",
            authorizing_account: "Compte donnant l'autorisation",
            listed_account: "Compte etant autorisé",
            new_listing: "Nouvel autorisation",
            asset_update: "Actif à mettre à jour",
            common_options: "Options",
            new_options: "Nouvelles options",
            new_producers: "Nouveaux fornisseurs de flux",
            asset_issue: "Montant à créer",
            max_margin_period_sec: "Periode max de marge (s)",
            call_limit: "Limite de couverture",
            short_limit: "Limite de short",
            settlement_price: "Prix de règlement"
        },
        assets: {
            title: "Actifs",
            market: "SmartCoins",
            user: "Actifs des utilisateurs",
            symbol: "Symbol",
            id: "ID",
            issuer: "Créateur",
            precision: "Précision"
        },
        asset: {
            title: "Actif",
            not_found: "L'actif %(name)s n'existe pas"
        },
        witnesses: {
            title: "Témoins"
        },
        delegates: {
            title: "Délégués"
        },
        delegate: {
            title: "Delegate"
        },
        workers: {
            title: "Ouvriers"
        },
        proposals: {
            title: "Propositions"
        },
        account: {
            title: "Compte"
        }
    },
    settings: {
        inverseMarket: "Orientation préféré pour les marchés",
        unit: "Unité de valeur préféré",
        confirmMarketOrder: "Demander une confirmation pour des ordres du marché",
        locale: "Changer de langue",
        confirm_yes: "Toujours",
        confirm_no: "Jamais",
        always_confirm: "Toujours demander une confirmation"
    },
    footer: {
        title: "Graphene",
        block: "Bloc courant",
        loading: "Loading..."
    },
    exchange: {
        price_history: "Historique du prix",
        order_depth: "Carnet d'ordres",
        market_history: "Historique du marché",
        balance: "Solde",
        total: "Total",
        value: "Valeur",
        price: "Prix",
        latest: "Dernier Prix",
        call: "Prix de flux",
        volume: "Volume",
        spread: "Spread",
        quantity: "Quantité",
        buy: "Acheter",
        sell: "Vendre",
        confirm_buy: "Confirmation d'ordre: Acheter %(buy_amount)s %(buy_symbol)s au prix de %(price_amount)s %(price_symbol)s",
        confirm_sell: "Confirmation d'ordre: Vendre %(sell_amount)s %(sell_symbol)s au prix de %(price_amount)s %(price_symbol)s",
        lowest_ask: "Lowest ask",
        highest_bid: "Highest bid"
    },
    markets: {
        choose_base: "Selectionner l'actif de base",
        filter: "Filtrer",
        core_rate: "Taux de base",
        supply: "Réserve",
        search: "Chercher"
    },
    pagination: {
        newer: "Newer",
        older: "Older"
    }
};
