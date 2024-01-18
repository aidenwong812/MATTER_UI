import countries from "react-select-country-list"
import { useMemo } from "react"
import Input from "../../shared/Input"
import { useCheckOut } from "../../providers/CheckOutProvider"
import Select from "../../shared/Select"
import Form from "../../shared/Form"
import { validation } from "./validation"
import { MODAL_SCREEN } from "../../hooks/useCreditCardModal"

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
    setModalScreen,
  } = useCheckOut()

  const handleConfirm = () => setModalScreen(MODAL_SCREEN.INFORMATION_SELECT)

  const countryData = useMemo(
    () =>
      countries()
        .getData()
        .map((item) => ({
          label: item.label,
          value: item.value,
        })),
    [],
  )

  return (
    <Form
      className="w-full flex flex-col gap-y-[10px] items-center
    justify-center my-[16px] px-[20px]"
      validationSchema={validation}
      onSubmit={handleConfirm}
    >
      <Input
        id="delivery_first_name"
        name="delivery_first_name"
        placeholder="First Name"
        value={deliveryFirstName}
        onChange={(e) => setDeliveryFirstName(e.target.value)}
        hookToForm
      />
      <Input
        id="delivery_last_name"
        name="delivery_last_name"
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
            id="delivery_zip_code"
            name="delivery_zip_code"
            placeholder="Zip Code"
            value={deliveryZipCode}
            onChange={(e) => setDeliveryZipCode(e.target.value)}
            hookToForm
          />
        </div>
      </div>
      <Input
        id="delivery_phone_number"
        name="delivery_phone_number"
        placeholder="Phone Number"
        value={deliveryPhoneNumber}
        onChange={(e) => setDeliveryPhoneNumber(e.target.value)}
        hookToForm
      />
      <Select
        id="delivery_country_code"
        name="delivery_country_code"
        value={deliveryCountryCode || ""}
        onChange={(e) => setDeliveryCountryCode(e.target.value)}
        options={countryData}
        hookToForm
      />
      <button
        type="submit"
        className="w-full h-[47px] bg-black rounded-full
                    flex gap-x-[10px] items-center justify-center mb-[16px]"
      >
        <p className="text-white text-[16px] leading-[120%]">Confirm Delivery Address</p>
      </button>
    </Form>
  )
}

export default DeliveryAddressForm
