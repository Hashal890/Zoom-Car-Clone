import {
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";

export default function FleetTableOne() {
  return (
    <Box>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Cancellation
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text color="#666" fontWeight="bold">
                Enjoy Free Cancellations upto 6 hours before the Booking start
              </Text>
              <Text>
                If the cancellation happens less than 6 hours from booking start
                time, 50% of the booking fee will be charged as cancellation
                fee. If the cancellation happens post the booking start time,
                then the entire booking fee will be charged as cancellation fee.
              </Text>
              <br />
              <Text color="#666" fontWeight="bold">
                Enjoy Unlimited Free Booking Modifications
              </Text>
              <Text>
                Please reach out to us or use the app if you would like to
                modify your booking. We allow unlimited free re-schedules and
                you can move your booking to anytime in the next 6 months. A
                small fee is charged if the modification is done in the last 6
                hours from booking start time. Keep Zooming!
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Reschedule before start #
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                Modifications prior to 6 hours from booking start are absolutely
                free of cost! A small fee (INR 200) is charged if the
                modification is done in the last 6 hours from booking start
                time.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Extension post start #
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                For Doorstep Bookings: Extension within 2 hours of Bookings End
                time will lead to cancellation of Doorstep Collection. No
                refunds applicable
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Shortening post start
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>No charges or refunds applicable</Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Shortening/Rescheduling within 24hrs of booking start or booking
              end.
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                Customers will not be able to change booking start time or
                shorten the booking end time. No refunds will be applicable.
                Although Customers can anytime extend the booking.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Late Return
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                Late return would be charged on the basis of the amount of time
                for which the user is late. Late penalty will be much higher
                than normal booking fee.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Pricing plan change
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                Pricing plan (free km per hour) cannot be changed post booking
                creation. Pricing will be charged on an half hour basis.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Free Kilometres
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                The free kilometres allotted to the customer will be
                proportional to the number of hours booked and the flexi package
                chosen.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Minimum Duration
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                The minimum booking duration for which the prices will be
                charged is 4 hours.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Discounts
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                Discount is applicable only on trips of a duration equal or
                greater than 8 hours at the time of booking. Discount is
                applicable only on the booking fee after adjustment for credits
                (excluding refundable deposit, if any) paid in advance to book
                the car. Discount will not be applicable on blackout days. List
                of upcoming blackout days / peak seasons is here (Please ensure
                that you select your city to view corresponding blackout
                days/peak season). Zoomcar reserves the right to cancel a
                booking if any unwarranted use of a discount coupon is
                identified.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Fuel Policy
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                Free Fuel is only included in pricing for with fuel bookings.
                Members will only be eligible for reimbursement of fuel expenses
                upon the submission of a Bill containing the quantity of fuel
                filled, the date on which the fuel was bought and the cost of
                the fuel.
              </Text>
              <Text>
                In case of No Fuel bookings, the vehicle should be returned by
                the Member, upon the completion of the booking, with fuel at the
                same level as at the start of the booking. If the Vehicle is
                returned with lesser fuel than the fuel level at the start of
                the trip then Refuelling penalty will be applicable.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Speed Governor
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                The Vehicle may be enabled with speed governor in compliance
                with the applicable Government regulations, that limits speed of
                the Vehicle upto 80 km/h. You will also be notified by SMS on
                your registered number.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Breakdown of vehicle
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                1. The Member shall be responsible for the costs related to the
                repair, recovery, and loss of use of any Zoomcar vehicle
                resulting from any of the foregoing, up to the current damage
                fee, as set forth in the Fee Policy / Rate Schedule (if such
                costs are because of the fault of the Member or if the fault is
                not directly established to any other person/ entity, or where
                any cost is not paid / reimbursed by the insurer of Zoomcar
                vehicles or the insurer of the other vehicle involved in the
                accident).
              </Text>
              <Text>
                2. Where the Member is not responsible for the breakdown of the
                Zoomcar vehicle, Zoomcar shall refund an amount equal to the
                cost of the unused hours of such booking. Further, Zoomcar shall
                not be liable for any further costs borne by the Member as a
                consequence of the breakdown of the Zoomcar vehicle
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              maxWidth="10%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Usage of Zoom/Driving Credits
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                Customers will be able to use Zoom/Driving credits upto 30% of
                Booking amount (excluding refundable deposit, if any) or upto
                10,000 whichever is lesser.There is individual expiry associated
                with all the credits in the system which is mentioned in the
                Credit Transaction Details page in app and website.
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
