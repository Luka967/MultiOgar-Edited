var BinaryWriter = require('./BinaryWriter');

function LeaderboardPosition(i) {
    this.place = i;
}

module.exports = LeaderboardPosition;

LeaderboardPosition.prototype.build = function() {
    if (this.place < 1) return;
    var buf = new BinaryWriter();
    buf.writeUInt8(0x30);
    buf.writeUInt16(this.place);
    return buf.toBuffer();
};
