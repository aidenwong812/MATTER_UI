import countries from "react-select-country-list"
import { useMemo } from "react"
import Input from "../../shared/Input"
import Select from "../../shared/Select"
import Form from "../../shared/Form"
import { validation } from "./validation"
import { useDeliveryForm } from "../../providers/DeliveryFormProvider"

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
    confirmDeliveryAddress,
    loading,
  } = useDeliveryForm()

  const countryData = useMemo(
    () =>
      countries()
        .getData()
        .map((item) => ({
          label: item.label,
          value: item.value,
        }))
        .filter((item) => item.value === "US"),
    [],
  )

  return (
    <Form
      className="w-full flex flex-col gap-y-[10px] items-center
    justify-center my-[16px] px-[20px]"
      validationSchema={validation}
      onSubmit={confirmDeliveryAddress}
    >
      <Input
        id="delivery_firstName"
        name="delivery_firstName"
        placeholder="First Name"
        value={deliveryFirstName}
        onChange={(e) => setDeliveryFirstName(e.target.value)}
        hookToForm
      />
      <Input
        id="delivery_lastName"
        name="delivery_lastName"
        placeholder="Last Name"
        value={deliveryLastName}
        onChange={(e) => setDeliveryLastName(e.target.value)}
        hookToForm
      />
      <Input
        id="delivery_address1"
        name="delivery_address1"
        placeholder="Address Line 1"
        value={deliveryAddress1}
        onChange={(e) => setDeliveryAddress1(e.target.value)}
        hookToForm
      />
      <Input
        id="delivery_address2"
        name="delivery_address2"
        placeholder="Address Line 2 (Optional)"
        value={deliveryAddress2}
        onChange={(e) => setDeliveryAddress2(e.target.value)}
        hookToForm
      />

      <div className="grid grid-cols-12 w-full gap-x-[15px]">
        <div className="col-span-8">
          <Input
            id="delivery_state"
            name="delivery_state"
            placeholder="State"
            value={deliveryState}
            onChange={(e) => setDeliveryState(e.target.value)}
            hookToForm
          />
        </div>
        <div className="col-span-4">
          <Input
            id="delivery_zipCode"
            name="delivery_zipCode"
            placeholder="Zip Code"
            value={deliveryZipCode}
            onChange={(e) => setDeliveryZipCode(e.target.value)}
            hookToForm
          />
        </div>
      </div>
      <Input
        id="delivery_phoneNumber"
        name="delivery_phoneNumber"
        placeholder="Phone Number"
        value={deliveryPhoneNumber}
        onChange={(e) => setDeliveryPhoneNumber(e.target.value)}
        hookToForm
      />
      <Select
        id="delivery_countryCode"
        name="delivery_countryCode"
        value={deliveryCountryCode || "US"}
        onChange={(e) => setDeliveryCountryCode(e.target.value)}
        options={countryData}
        disabled
        hookToForm
      />
      <button
        type="submit"
        className={`w-full h-[47px] rounded-full
        flex gap-x-[10px] items-center justify-center mb-[16px]
        ${loading ? "bg-gray_3 cursor-not-allowed text-gray_8" : "bg-black"}`}
        disabled={loading}
      >
        <p className="text-white text-[16px] leading-[120%]">Confirm Delivery Address</p>
      </button>
    </Form>
  )
}

export default DeliveryAddressForm
