import countries from "react-select-country-list"
import { useMemo } from "react"
import Input from "../../shared/Input"
import { useCheckOut } from "../../providers/CheckOutProvider"
import Select from "../../shared/Select"

const DeliveryAddressForm = () => {
  const {
    deliveryFirstName,
    setDeliveryPhoneNumber,
    setDeliveryFirstName,
    deliveryLastName,
    setDeliveryLastName,
    deliveryAddress1,
    deliveryAddress2,
    setDeliveryAddress1,
    setDeliveryAddress2,
    deliveryZipCode,
    setDeliveryZipCode,
    deliveryState,
    setDeliveryState,
    deliveryCountryCode,
    setDeliveryCountryCode,
    deliveryPhoneNumber,
    deliveryCountry,
    setDeliveryCountry,
  } = useCheckOut()
  const countryData = useMemo(
    () =>
      countries()
        .getData()
        .map((item) => ({
          label: item.value,
          value: item.value,
        })),
    [],
  )

  return (
    <>
      <Input
        id="delivery_first_name"
        name="delivery_last_name"
        placeholder="First Name"
        value={deliveryFirstName}
        onChange={(e) => setDeliveryFirstName(e.target.value)}
      />
      <Input
        id="delivery_last_name"
        name="delivery_last_name"
        placeholder="Last Name"
        value={deliveryLastName}
        onChange={(e) => setDeliveryLastName(e.target.value)}
      />
      <Input
        id="delivery_address1"
        name="delivery_address1"
        placeholder="Address Line 1"
        value={deliveryAddress1}
        onChange={(e) => setDeliveryAddress1(e.target.value)}
      />
      <Input
        id="delivery_address2"
        name="delivery_address2"
        placeholder="Address Line 2 (Optional)"
        value={deliveryAddress2}
        onChange={(e) => setDeliveryAddress2(e.target.value)}
      />
      <Input
        id="delivery_zip_code"
        name="delivery_zip_code"
        placeholder="Zip Code"
        value={deliveryZipCode}
        onChange={(e) => setDeliveryZipCode(e.target.value)}
      />
      <div className="grid grid-cols-12 w-full gap-x-[15px]">
        <div className="col-span-8">
          <Input
            id="delivery_state"
            name="delivery_state"
            placeholder="State / Province"
            value={deliveryState}
            onChange={(e) => setDeliveryState(e.target.value)}
          />
        </div>
        <div className="col-span-4">
          <Select
            id="delivery_country_code"
            name="delivery_country_code"
            value={deliveryCountryCode || ""}
            className="!w-[100px]"
            onChange={(e) => setDeliveryCountryCode(e.target.value)}
            options={countryData}
          />
        </div>
      </div>
      <Input
        id="delivery_phone_number"
        name="delivery_phone_number"
        placeholder="Phone Number"
        value={deliveryPhoneNumber}
        onChange={(e) => setDeliveryPhoneNumber(e.target.value)}
      />
      <Input
        id="delivery_country"
        name="delivery_country"
        placeholder="Country"
        value={deliveryCountry}
        onChange={(e) => setDeliveryCountry(e.target.value)}
      />
    </>
  )
}

export default DeliveryAddressForm
