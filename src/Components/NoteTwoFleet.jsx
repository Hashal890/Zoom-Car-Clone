import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export default function NoteTwoFleet() {
  return (
    <Box fontSize="14px" color="#666" textAlign="justify">
      <Box display="flex" gap="10px">
        <Text fontWeight="bold">Note:</Text>
        <Text>
          Payments owed by members will be deducted from the security deposit.
          If the security deposit does not cover such payments, the balance must
          be paid by the member electronically.
        </Text>
      </Box>
      <br />
      <Text>
        <sup>#</sup>
        Please note there are four cases where there will be exceptions:
      </Text>
      <br />
      <UnorderedList pl="7" lineHeight="25px">
        <ListItem>
          In the event the member is found to be under the influence of alcohol
          during a booking, the member will be held liable for 100% of the
          vehicle damage bill as per the invoice received from the vehicle
          workshop.
        </ListItem>
        <ListItem>
          The member will be liable for 100% of the entire vehicle damage bill
          in the event that the vehicle workshop and/or insurance company deem
          the damage to be consequential in nature (this will be clearly stated
          in the accident report). Consequential damage occurs when the member
          continues driving even after an external vehicle impact, thereby
          severely undermining the condition of the vehicle.
        </ListItem>
        <ListItem>
          In the event a non-Zoomcar member is found to be the one driving at
          the time of accident, then the member will be held liable for 100% of
          the vehicle damage bill as per the invoice received from the workshop.
        </ListItem>
        <ListItem>
          Notwithstanding anything to the contrary contained herein, only SUV
          vehicles are permitted for trips to regions having higher altitudes
          including but not limited to Leh or Ladakh districts in Jammu &
          Kashmir. Damages caused to the vehicles except falling under SUV
          (Ecosport, Scorpio, XUV, Tata Safari, Toyota Fortuner) category will
          attract charges viz; damages fees of ₹ 10,000 along with repairs cost,
          towing cost, travel cost of representatives of Zoomcar and other
          related charges, if any on actual basis.
        </ListItem>
      </UnorderedList>
      <br />
      <br />
    </Box>
  );
}
