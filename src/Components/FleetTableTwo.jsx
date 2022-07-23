import { Box, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";

export default function FleetTableTwo() {
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
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Returning the vehicle to the wrong location
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                ₹10,000 + Full hourly fee for use of the vehicle + Full late fee
                until the vehicle is returned to the correct location
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Traffic and Parking violations
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                Full payment of fines + ₹500 per 30 days late in payment
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              No Show
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                Bookings would stand cancelled if after 4 hours of booking start
                time the customer still doesn’t show up. No refunds would be
                applicable
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Overspeeding >= 125 km/hr
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                ₹2500 (over and above any government fines that may have been
                levied)
              </Text>
              <Text>
                Expulsion from Zoomcar if overspeeding occurs in two bookings
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Overspeeding >= 150 km/hr
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>Expulsion from Zoomcar</Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Smoking
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>₹1,000 + applicable damage costs related to interiors</Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Wrong Fuelling
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                The member will be liable for the full cost of damage to the
                vehicle + miscellaneous expenses arising out of the damages.
              </Text>
              <Text>
                Recommendation- Zoomcar would recommend that the member consult
                the RC Documents of the rented vehicle for information as to the
                correct fuel type.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Key not returned at end of reservation
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                ₹ 2000 + replacement cost, if not returned within 3 days
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Loss of documents
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                <sup>* </sup> Click here for details
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Co-driver
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                ₹ 2000 if co-driver has not been added in the booking before
                booking start time.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Vehicle Damage (Accidental)
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                Any unintentional/accidental damage will be liable for the
                damage charges of ₹ 10,000/. For more details click here. *
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Vehicle Damage (Intentional or Consequential)
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                In case of any intentional damage or damage caused to the
                vehicle as consequence of the member driving the car, even after
                the car is damaged and need urgent repair (Examples include but
                are not limited to:
              </Text>
              <Text>
                a. driving in water loggings resulting into engine breakdown,
              </Text>
              <Text>
                b. driving after under body damages resulting into engine break
                down because of oil drainage,
              </Text>
              <Text>
                c. driving while under the influence of alcohol or other
                intoxicants,
              </Text>
              <Text>d. driving with clutch over pressing etc.</Text>
              <Text>
                Member will be liable for the full cost of repair post damage to
                the vehicle + loss of expected revenue arising out of the
                damage.
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Towing and Impounding
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>No cost if caused by vehicle failure</Text>
              <Text>Full cost if caused by user negligence</Text>
            </Td>
          </Tr>
          <Tr>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              color="#666"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Cleaning required (interiors)
            </Td>
            <Td
              lineHeight="20px"
              border="1px solid #ccc"
              maxWidth="100%"
              minH="100px"
              display="block"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              <Text>
                Washing of removables (for footmats etc) would be charged at
                ₹500. Interior Washing / Drycleaning (for seat covers, door
                panels) would be charged at ₹1,500.
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
