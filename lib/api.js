module.exports = {
  Catalog: [
    'CheckAvailability',
    'CreateCategory',
    'CreateCoupon',
    'CreateCouponRedemptionCode',
    'CreateCouponRedemptionCodes',
    'CreateCrossSellTag',
    'CreateDiscount',
    'CreateDistributionChannel',
    'CreateGlobalDiscount',
    'CreateMedia',
    'CreatePerson',
    'CreatePlaylist',
    'CreatePricingPlan',
    'CreateProduct',
    'CreateSegment',
    'CreateSegmentationRule',
    'CreateShippingMethod',
    'CreateStorefront',
    'ExportCouponRedemptionCodes',
    'GenerateCatalogFeed',
    'GenerateCouponRedemptionCodes',
    'ImportCouponRedemptionCodes',
    'IngestPlaylist',
    'IngestProduct',
    'RetrieveCategory',
    'RetrieveCoupon',
    'RetrieveCouponRedemptionCode',
    'RetrieveDiscount',
    'RetrieveDistributionChannel',
    'RetrieveGlobalDiscount',
    'RetrieveMedia',
    'RetrievePerson',
    'RetrievePlaylist',
    'RetrievePricingPlan',
    'RetrieveProduct',
    'RetrieveProductsForIngestion',
    'RetrieveSegment',
    'RetrieveSegmentationRule',
    'RetrieveShippingMethod',
    'RetrieveStorefront',
    'SearchBundleChildren',
    'SearchCategories',
    'SearchCouponRedemptionCodeTransfers',
    'SearchCoupons',
    'SearchCrossSellTags',
    'SearchDiscounts',
    'SearchDistributionChannels',
    'SearchGlobalDiscounts',
    'SearchMedia',
    'SearchPersons',
    'SearchPlaylists',
    'SearchPricingPlans',
    'SearchProducts',
    'SearchSegmentationRules',
    'SearchSegments',
    'SearchShippingMethods',
    'SearchStorefronts',
    'SyncExternalMetadata',
    'SyncExternalMetadataReferences',
    'SyncExternalProduct',
    'UpdateBundle',
    'UpdateCategory',
    'UpdateCategoryAssociations',
    'UpdateCategoryStatus',
    'UpdateCoupon',
    'UpdateCouponRedemptionCode',
    'UpdateCouponRedemptionCodeStatus',
    'UpdateCouponStatus',
    'UpdateCrossSellTag',
    'UpdateDiscount',
    'UpdateDiscountStatus',
    'UpdateDistributionChannel',
    'UpdateDistributionChannelStatus',
    'UpdateGlobalDiscount',
    'UpdateGlobalDiscountStatus',
    'UpdateMedia',
    'UpdateMediaStatus',
    'UpdatePerson',
    'UpdatePersonStatus',
    'UpdatePlaylist',
    'UpdatePlaylistStatus',
    'UpdatePricingPlan',
    'UpdatePricingPlanStatus',
    'UpdateProduct',
    'UpdateProductStatus',
    'UpdateSegment',
    'UpdateSegmentationRule',
    'UpdateSegmentationRuleStatus',
    'UpdateSegmentStatus',
    'UpdateShippingMethod',
    'UpdateShippingMethodStatus',
    'UpdateStorefront',
    'UpdateStorefrontStatus'
  ],
  Configuration: [
    'ClearCache',
    'CreateInteraction',
    'RetrieveInteraction',
    'SearchBusinessUnits',
    'SearchInteractions'
  ],
  Metadata: [
    'Categories',
    'Codes',
    'Coupon',
    'DiscretionaryDiscounts',
    'Media',
    'PeopleForBrowse',
    'Person',
    'Ping',
    'Playlist',
    'Product',
    'Promotion',
    'SearchSuggestions',
    'Storefront',
    'StorefrontPage'
  ],
  Reporting: [
    'ProcessDataExtract'
  ],
  Security: [
    'CloseSession',
    'CreateGroup',
    'CreateRole',
    'CreateSession',
    'CreateUser',
    'PingSession',
    'ResetPassword',
    'RetrieveGroup',
    'RetrieveRole',
    'RetrieveSecurityAttributesForRoles',
    'RetrieveUser',
    'SearchGroups',
    'SearchRoles',
    'SearchSecurityAttributes',
    'SearchUsers',
    'UpdateCredentials',
    'UpdateGroup',
    'UpdatePreferences',
    'UpdateRole',
    'UpdateSessionBusinessUnit',
    'UpdateUser',
    'ValidateSecurity'
  ],
  Subscriber: [
    'ActivateDiscounts',
    'ActivateExternalContent',
    'ActivateSubscriber',
    'ApplyCoupon',
    'CalculateModifyOrderQuote',
    'CalculateOrderQuote',
    'CalculateRemoveOrderQuote',
    'CalculateRenewOrderQuote',
    'CancelOrder',
    'ChargePaymentInstrument',
    'CloseSession',
    'CompleteOrderPayment',
    'CreateAddress',
    'CreateExternalAuthorizations',
    'CreateHousehold',
    'CreateInteraction',
    'CreatePaymentInstrument',
    'CreateSession',
    'CreateSubscriber',
    'CreateWishlist',
    'EmailLogin',
    'GenerateDeviceRendezvousCode',
    'GeneratePassword',
    'InitiateDeviceLeave',
    'LinkNewUvUser',
    'LinkOAuthClient',
    'Ping',
    'PingSession',
    'PreviewGiftRedemptionOrder',
    'PromoteDeviceSession',
    'RedeemGiftCard',
    'RegisterDevice',
    'RemoveAddress',
    'RemoveContentViews',
    'RemoveHousehold',
    'RemovePaymentInstrument',
    'RetrieveAddress',
    'RetrieveAddresses',
    'RetrieveCategoryContext',
    'RetrieveCouponStatistics',
    'RetrieveDeviceJoinTrigger',
    'RetrieveDevicePinStatus',
    'RetrieveDeviceRendezvousStatus',
    'RetrieveDevices',
    'RetrieveHouseholds',
    'RetrieveOrder',
    'RetrievePaymentInstrument',
    'RetrievePayPalToken',
    'RetrievePersonContext',
    'RetrievePlaylistContext',
    'RetrieveProductContext',
    'RetrieveProductRecommendations',
    'RetrieveShoppingCart',
    'RetrieveStorefrontPageContext',
    'RetrieveSubscriber',
    'RetrieveSubscriberContext',
    'RetrieveSubscription',
    'RetrieveUvUser',
    'RetrieveWallet',
    'SearchContentViews',
    'SearchFavoriteProducts',
    'SearchLocker',
    'SearchOrders',
    'SearchPersons',
    'SearchProducts',
    'SearchProductsByCoupon',
    'SearchQueuedProducts',
    'SearchRedemptionCodes',
    'SearchSubscriptions',
    'SearchTransactions',
    'SearchWishlistProducts',
    'SearchWishlists',
    'SubmitAnonymousGiftOrder',
    'SubmitAnonymousOrder',
    'SubmitGiftOrder',
    'SubmitGiftRedemptionOrder',
    'SubmitModifyOrder',
    'SubmitOrder',
    'SubmitRemoveOrder',
    'SubmitRenewOrder',
    'SubmitRestoreOrder',
    'SubmitSupportEmail',
    'SubmitUpgradeOrder',
    'UnregisterDevice',
    'UpdateAddress',
    'UpdateContentProgress',
    'UpdateCredentials',
    'UpdateDevice',
    'UpdateDevicePin',
    'UpdateExternalAuthorizations',
    'UpdateFavoriteProducts',
    'UpdateHousehold',
    'UpdateHouseholdMembers',
    'UpdateMediaRating',
    'UpdatePaymentInstrument',
    'UpdatePersonRating',
    'UpdateProductRating',
    'UpdateQueuedProducts',
    'UpdateShoppingCart',
    'UpdateSubscriber',
    'UpdateSubscription',
    'UpdateWishlist',
    'UpdateWishlistProducts',
    'ValidateAddress',
    'ValidateCredentials',
    'ValidateEntitlements',
    'ValidatePaymentInstrument',
    'ValidateUvUser',
    'ViewContent'
  ],
  SubscriberManagement: [
    'ActivateDiscounts',
    'ActivateExternalContent',
    'AddPaymentInstrumentToBlacklist',
    'AddPaymentInstrumentToWhitelist',
    'AnonymizeSubscriber',
    'ApplyCoupon',
    'CalculateModifyOrderQuote',
    'CalculateOrderQuote',
    'CalculateRemoveOrderQuote',
    'CalculateRenewOrderQuote',
    'CancelOrder',
    'CancelScheduledSubscriberAnonymization',
    'ChargePaymentInstrument',
    'CloseSession',
    'CompleteOrderPayment',
    'CreateAddress',
    'CreateExternalAuthorizations',
    'CreateHousehold',
    'CreatePaymentInstrument',
    'CreateRemark',
    'CreateSubscriber',
    'EmailLogin',
    'GenerateDeviceRendezvousCode',
    'GeneratePassword',
    'GrantAccessRights',
    'GrantCoupon',
    'Ping',
    'PreviewGiftRedemptionOrder',
    'ProcessAuthorization',
    'ProcessBatchPayment',
    'ProcessCredit',
    'ProcessPayment',
    'ProcessWriteOff',
    'RedeemGiftCard',
    'RegisterDevice',
    'RemoveAddress',
    'RemoveContentViews',
    'RemoveDiscount',
    'RemoveHousehold',
    'RemovePaymentInstrument',
    'RemovePaymentInstrumentFromBlacklist',
    'RemovePaymentInstrumentFromWhitelist',
    'ResendGiftCardNotification',
    'ResendGiftOrderNotification',
    'ResendRedemptionCode',
    'ResendSubscriberActivationEmail',
    'ResubmitOrder',
    'RetrieveActiveSessions',
    'RetrieveAddress',
    'RetrieveAddresses',
    'RetrieveBatchPayment',
    'RetrieveBlacklistItem',
    'RetrieveChallengeAnswer',
    'RetrieveConvivaViewingSessions',
    'RetrieveDevicePinStatus',
    'RetrieveDeviceRendezvousStatus',
    'RetrieveDevices',
    'RetrieveGiftCardRedemption',
    'RetrieveHouseholds',
    'RetrieveLockerItem',
    'RetrieveOrder',
    'RetrieveOverview',
    'RetrievePaymentInstrument',
    'RetrieveRemarkAttachment',
    'RetrieveSubscriber',
    'RetrieveSubscription',
    'RetrieveTransaction',
    'RetrieveTransactionTotals',
    'RetrieveWallet',
    'RetrieveWhitelistItem',
    'RevokeGiftOrder',
    'SearchBatchPayments',
    'SearchBlacklist',
    'SearchContentActivity',
    'SearchContentViews',
    'SearchCouponRedemptions',
    'SearchCoupons',
    'SearchGiftCardRedemptions',
    'SearchLocker',
    'SearchOrders',
    'SearchProducts',
    'SearchProductsByCoupon',
    'SearchRedemptionCodes',
    'SearchRemarks',
    'SearchSubscribers',
    'SearchSubscriptions',
    'SearchTransactions',
    'SearchViewingActivity',
    'SearchWhitelist',
    'SendTransactionReceipt',
    'SubmitGiftOrder',
    'SubmitGiftRedemptionOrder',
    'SubmitModifyOrder',
    'SubmitOrder',
    'SubmitRemoveOrder',
    'SubmitRenewOrder',
    'SubmitRestoreOrder',
    'SubmitUpgradeOrder',
    'UnregisterDevice',
    'UpdateAddress',
    'UpdateCredentials',
    'UpdateDevice',
    'UpdateDevicePin',
    'UpdateExternalAuthorizations',
    'UpdateHousehold',
    'UpdateHouseholdMembers',
    'UpdateLockerItem',
    'UpdateOrder',
    'UpdatePaymentInstrument',
    'UpdateRedemptionCode',
    'UpdateRemark',
    'UpdateShoppingCart',
    'UpdateSubscriber',
    'UpdateSubscription',
    'ValidateAddress',
    'ValidateCredentials',
    'ValidateEntitlements',
    'ValidatePaymentInstrument',
    'ValidateRedemptionCodes'
  ],
  UltraViolet: [
    'CreateRightsToken',
    'CreateStream',
    'LinkNewUser',
    'Manifest',
    'RemoveRightsToken',
    'RemoveStream',
    'RetrieveMetadata',
    'RetrieveUser',
    'SearchLocker',
    'ValidateDownload',
    'ValidateUser'
  ],
  Workflow: [
    'DeleteDeliveryCapabilityWorkflow',
    'DeleteOrderShippingWorkflow',
    'DeleteRevenueWorkflow',
    'DeleteSubscriberProductShippingInformationChangeWorkflow',
    'RetrieveSubscriberProductShippingInformationChangeWorkflow',
    'RetrieveWorkflow',
    'SearchDeliveryCapabilityWorkflows',
    'SearchOrderShippingWorkflows',
    'SearchRevenueWorkflows',
    'SearchWorkflows',
    'UpdateDeliveryCapabilityWorkflow',
    'UpdateOrderShippingWorkflow',
    'UpdateRevenueWorkflow',
    'UpdateSubscriberProductShippingInformationChangeWorkflow'
  ]
};