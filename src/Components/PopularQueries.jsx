import { Box, Text } from "@chakra-ui/react";

export default function PopularQueries() {
  return (
    <Box
      h="205px"
      overflow="hidden"
      overflowY="scroll"
      p="5"
      border="2px #e0e0e0 dashed"
      borderRadius="10px"
    >
      <details boxSizing="inherit" p="3">
        <summary>
          Do I have to return the car to the same location where I picked it up?
        </summary>
        <Text p="2" bg="whitesmoke">
          Yes. You must bring the vehicle back to the same place you picked it
          up before the end of your reservation. If you dropoff the car at a
          location different from your pickup point, you will be charged INR
          2,000, and the full hourly rate and late fees until the vehicle is
          returned to the correct location.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>What happens if I return the car late?</summary>
        <Text p="2" bg="whitesmoke">
          A high penalty will be applicable for the amount of time you are late.
          In order to avoid paying this penalty, you can extend the booking from
          the app, well in advance.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>Is there a km limit to how much I can drive?</summary>
        <Text p="2" bg="whitesmoke">
          With reference to the km package which you select you are eligible to
          drive accordingly.For example, if you opt for 10 km/hr package then 5
          hours reservation would come with 50 km in driving at no additional
          charge, while a 3 day reservation would come with 720 km in driving at
          no additional charges. There is a per-km charge for each km beyond
          that point. Please see Zoomcar tariffs for more details.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>How do I unlock my car?</summary>
        <Text p="2" bg="whitesmoke">
          "Location without fleet (KLE booking): Filling checklists is easy! Now
          you can fill your pick up checklist via the Zoomcar App. Just login to
          the App, select your live booking from the My bookings page and start.
          1. Fill Exterior cleanliness and damage reporting with images. 2.
          Unlock the vehicle 3. Interior cleanliness, documents check and
          vehicle KM/Fuel readings with images. 4. Pick up the car keys from the
          dashboard. 5. Start your trip. It is advised to keep the images for
          your future reference and do ensure proper network coverage filling
          the checklist." Location with Fleet assistance: Collect the keys from
          the location executive.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>Where can I find the Car Keys?</summary>
        <Text p="2" bg="whitesmoke">
          "After you unlock the car using KLE, you can find the car keys in the
          dashboard." At times previous customers would have kept the car keys
          on the seat, On the sun visor, dropped below the seats.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>
          What are the fines that Zoomcar levies on the Customer?
        </summary>
        <Text p="2" bg="whitesmoke">
          For the safety of our cars, and for a great Zoom experience we have
          some fines.For more information on fines visit the Fee policy page
          https://www.zoomcar.com/policy#feePolicy.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>
          Can someone else drive Zoomcar during my reservation? What is the
          process to add co-driver?
        </summary>
        <Text p="2" bg="whitesmoke">
          We understand that driving can get tiring on a long drive and you want
          to share driving responsibilities with a friend. Simply add co-drivers
          through the Co-Drivers page in your account. This will ensure that in
          case of any damage while your friend is driving, liability is limited
          to the security deposit (under our usual conditions). If your friend
          is not a Zoomcar user already, we will ask them to upload their DL and
          then review it. If your friend is already a Zoomcar user then their DL
          has most likely already been approved. Please do remember, you are
          still responsible for the vehicle during your reservation.
          Additionally if a non-Zoomcar verified person drives the vehicle,
          Zoomcar's insurance coverage would be invalidated and you will face
          unlimited liability.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>How do I end my reservation?</summary>
        <Text p="2" bg="whitesmoke">
          "Location without fleet (KLE booking): Filling checklists is easy! Now
          you can fill your End checklist via the Zoomcar app. Just log in to
          the App, select your live booking from the My bookings page and start.
          1. Keep the keys inside the dashboard. 2. Edit your checklist details
          if there are any changes with Images. 3. Lock the vehicle. 4. End of
          your trip by uploading 4 side images of the vehicle. It is advised to
          keep the images for your future reference and need proper network
          coverage filling the checklist." Please collect all your belonging
          before locking the vehicle.
        </Text>
      </details>
      <details boxSizing="inherit" p="3">
        <summary>How will I receive my Refund?</summary>
        <Text p="2" bg="whitesmoke">
          "Refund will be initiated to the account/card used to make the payment
          and will take upto 30 days to settle." If the payment was made from
          the wallet account, it would take 24-48 hrs for the refund to settle.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>
          In case of Doorstep service who will deliver the car?What if the
          delivery guy comes late?
        </summary>
        <Text p="2" bg="whitesmoke">
          A Delivery executive will be allotted for your booking one hour before
          the booking start time, you will receive the details of the delivery
          executive at the same time. In the case of address clarification, our
          executive will call you for confirmation and he will be at your
          location by your bookings start time. You can contact the executive
          over the shared contact number.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>How long do refunds take?</summary>
        <Text p="2" bg="whitesmoke">
          All Refunds made shall be through the original payment account only
          within 30 working days
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>How do I reach the location of the car?</summary>
        <Text p="2" bg="whitesmoke">
          Once the booking is confirmed, vehicle details with the location would
          be shared 3-4 hours prior to booking start time. We will also share an
          exact car location before 30 minutes of your booking start time along
          with the Navigation Link. Please use this Link or your application to
          navigate to your pickup location.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>How do I find my car?</summary>
        <Text p="2" bg="whitesmoke">
          It’s simple to find the vehicle. We will share the exact vehicle
          location 30 minutes prior to your booking start time through an SMS on
          your registered contact number. Use this navigation to reach your
          vehicle or you can even use Find my car option through your App and
          follow the Last mile directions.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>
          How do I proceed with my Start Checklist after reaching the location?
        </summary>
        <Text p="2" bg="whitesmoke">
          "Location without fleet (KLE booking): Filling checklists is easy! Now
          you can fill your pick up checklist via the Zoomcar app. Just log in
          to the App, select your live booking from the My bookings page and
          start. 1. Fill Exterior cleanliness and damage reporting with images.
          2. Unlock the vehicle 3. Interior cleanliness, documents check and
          vehicle KM/Fuel readings with images. 4. Pick up the car keys from the
          dashboard. 5. Start your trip. It is advised to keep the images for
          your future reference and do ensure proper network coverage filling
          the checklist." Location with Fleet assistance: Collect the keys from
          the location executive.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>
          I reached my location back, how do I proceed with my End Checklist?
        </summary>
        <Text p="2" bg="whitesmoke">
          "Location without fleet (KLE booking): Filling checklists is easy! Now
          you can fill your End checklist via the Zoomcar app. Just log in to
          the App, select your live booking from the My bookings page and start.
          1. Keep the keys inside the dashboard. 2. Edit your checklist details
          if there are any changes with Images. 3. Lock the vehicle. 4. End of
          your trip by uploading 4 side images of the vehicle. It is advised to
          keep the images for your future reference and need proper network
          coverage filling the checklist." Please collect all your belonging
          before locking the vehicle.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>
          What if my Driving License is in not yet Approved/ Review in progress
          state?
        </summary>
        <Text p="2" bg="whitesmoke">
          If you have successfully completed the DL upload process, be rest
          assured that your driving license will be approved before your booking
          start time. You can check the status of your Driving license over your
          App. If our team is unable to approve your Driving license, they will
          notify you of the supporting documents required to approve your
          driving license. Please upload those documents and our team will
          verify the uploaded documents to approve your driving license. Kindly
          wait till your Driving license is reviewed by our team.
        </Text>
      </details>
      <details boxSizing="inherit" p="3">
        <summary>How do I extend my booking end time?</summary>
        <Text p="2" bg="whitesmoke">
          "Extension is subject to vehicle availability and extension can be
          done before the booking end time. To extend the booking you have to 1.
          Login to Zoomcar application 2. Click on My trips from Menu option 3.
          Select the booking 4. Click on extend booking right below the
          Remaining time. 5. If yes, Key in your desired extension time. 6. Pay
          the amount immediately to confirm your extension. Failing to pay the
          extension amount immediately would reverse the extended time and you
          will have to drop back the vehicle within the originally reserved
          time. Any Late drop without extension would incur late fees and
          charges. https://www.zoomcar.com/policy#feePolicy." Extend booking
          option will be available only if the vehicle is available for
          extension.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>How do I track my free KM reading?</summary>
        <Text p="2" bg="whitesmoke">
          "To avoid the KM confusion, we request you to capture the odometer
          reading images to track your free KMs and for any future reference and
          check your booking details on your APP to know the total free KM on
          the booking. Excess KM would be charged as per the selected vehicle.
          Ex: Extra KMs x Per km charge of the vehicle"
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>
          What would be the fuel level in the vehicle which gets allotted to me?
          What if the fuel level is low?
        </summary>
        <Text p="2" bg="whitesmoke">
          Fuel levels in few vehicles may be as low as 5-10%. Post completing
          the pick-up checklist procedure. Please do check the fuel percentage
          in the vehicle and refuel the vehicle if the current fuel level is not
          enough for your trip. Please refuel the vehicle as per your trip
          requirement.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>
          What if I see there are exterior damages on the vehicle?
        </summary>
        <Text p="2" bg="whitesmoke">
          We try to inspect all our vehicle's condition periodically however if
          you notice any damage on the vehicle, Please do call out the same in
          the start checklist and also do capture the images for future
          reference.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>How should I pay the outstanding amount on a booking?</summary>
        <Text p="2" bg="whitesmoke">
          You can pay the outstanding amount either through your APP. Click on
          the booking with an outstanding amount and click on the Outstanding
          amount. You can pay using Debit/Credit card or net banking.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>When will I get my security deposit refunded back?</summary>
        <Text p="2" bg="whitesmoke">
          Once the booking gets completed, We will process the refund of your
          security deposit within 30 working days. The payment owed will be
          deducted from the security deposit in the event the customer is found
          to violate Zoomcar T&C.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>
          What if there is an outstanding amount against my previous booking
          pending?
        </summary>
        <Text p="2" bg="whitesmoke">
          You will not be able to pick up the vehicle on your next booking
          unless you have cleared all the outstanding balance from your previous
          booking. Please ensure you check for pending outstandings before
          making another booking.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>When will I get to know the exact vehicle details?</summary>
        <Text p="2" bg="whitesmoke">
          Vehicle and Location details would be shared 3-4 hours prior to your
          booking start time to your registered mobile number. Once the vehicle
          and location are allocated, You can check the details on your APP's
          Main page.
        </Text>
      </details>
      <details boxSizing="inherit" p="3">
        <summary>What are excess KMs charges?</summary>
        <Text p="2" bg="whitesmoke">
          Every booking comes with a KM package which is already included in the
          booking fee however exceeding the free KMs would result in extra fee
          as per the selected vehicle. You can keep a note of your free KMs and
          an extra fee per KM on your App. Charges would be according to the
          extra KMs driven: Total extra KMs x Charge per km
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>What is the Refueling charge?</summary>
        <Text p="2" bg="whitesmoke">
          If you have made a no fuel booking, you are expected to bring back the
          vehicle at the same fuel level as the beginning of the trip. Dropping
          back the vehicle with lesser fuel levels will result in a penalty of
          80rs per ltr.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>What is traffic violation fee?</summary>
        <Text p="2" bg="whitesmoke">
          Please ensure you drive safely without breaking any traffic rules. In
          case of an uncertain event of a traffic violation, Please clear the
          penalty through the Govt portal to avoid un-necessary charges against
          your booking and inconvenience to other customers.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>
          Will I be charged for the cancellation of the booking?
        </summary>
        <Text p="2" bg="whitesmoke">
          a) A cancellation charge of Rs. 200 applies if you cancel more than 24
          hours before booking start time. b) A charge of 50% of the booking
          amount is applicable if canceled within 24 hours of the booking start
          time. c) No cancellation is allowed after booking start time as there
          is no refund.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>Can I get a car for any use-case?</summary>
        <Text p="2" bg="whitesmoke">
          Below are the use-cases for which the cars be alloted: -
          Transportation for Doctors/Nurses/Paramedics - Authorized personnel
          designated by the government - Medical Emergencies - Grocery or
          Pharmacy Visits - Visiting bank (For Bangalore only) - Shifting house
          (For Bangalore only)
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>What would I get for having a better Driver Score?</summary>
        <Text p="2" bg="whitesmoke">
          In terms of rewards, fully redeemable Z points will be added to your
          Zoomcar Account if you have a score of more than 65. Better driving
          would also reduce the fuel cost.
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>What is Driver Score?</summary>
        <Text p="2" bg="whitesmoke">
          Driver Score is a rating mechanism that reflects your driving
          behaviour for the trip. User's aggregate score is an average of the
          individual trips' driver score
        </Text>
      </details>
      <details boxSizing="inherit">
        <summary>Will the credits expire?</summary>
        <Text p="2" bg="whitesmoke">
          There is individual expiry associated with all the credits in the
          system which is mentioned in the Credit Transaction Details page
          in-app and website.
        </Text>
      </details>
    </Box>
  );
}
