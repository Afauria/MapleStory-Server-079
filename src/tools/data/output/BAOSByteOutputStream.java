package tools.data.output;

import java.io.ByteArrayOutputStream;

public class BAOSByteOutputStream implements ByteOutputStream
{
    private final ByteArrayOutputStream baos;
    
    public BAOSByteOutputStream(final ByteArrayOutputStream baos) {
        this.baos = baos;
    }
    
    @Override
    public void writeByte(final byte b) {
        this.baos.write(b);
    }
}
